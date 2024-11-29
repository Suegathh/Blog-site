import React, { useReducer } from 'react';
import './ToDo.css'

// Initial state for the To-Do list
const initialState = {
  todos: [],
  newTodo: {
    title: '',
    dueDate: '',
    content: '',
  },
  editingTodo: null,
};

// Reducer function to handle different actions
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            title: state.newTodo.title,
            dueDate: state.newTodo.dueDate,
            content: state.newTodo.content,
            completed: false,
          },
        ],
        newTodo: { title: '', dueDate: '', content: '' },
      };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, ...action.payload.updatedData }
            : todo
        ),
        newTodo: { title: '', dueDate: '', content: '' },
        editingTodo: null,
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'SET_NEW_TODO_FIELD':
      return {
        ...state,
        newTodo: { ...state.newTodo, [action.payload.field]: action.payload.value },
      };
    case 'SET_EDITING_TODO':
      return {
        ...state,
        editingTodo: action.payload,
        newTodo: {
          title: action.payload.title,
          dueDate: action.payload.dueDate,
          content: action.payload.content,
        },
      };
    default:
      return state;
  }
}

function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // Handle input changes for new to-do fields
  const handleInputChange = (event, field) => {
    dispatch({ type: 'SET_NEW_TODO_FIELD', payload: { field, value: event.target.value } });
  };

  // Handle form submission (adding or updating a to-do)
  const handleAddOrUpdateTodo = (event) => {
    event.preventDefault();
    if (state.newTodo.title.trim() && state.newTodo.dueDate.trim() && state.newTodo.content.trim()) {
      if (state.editingTodo) {
        dispatch({
          type: 'UPDATE_TODO',
          payload: {
            id: state.editingTodo.id,
            updatedData: state.newTodo,
          },
        });
      } else {
        dispatch({ type: 'ADD_TODO' });
      }
    }
  };

  // Set the todo to be edited
  const handleEditTodo = (todo) => {
    dispatch({ type: 'SET_EDITING_TODO', payload: todo });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>

      {/* Input fields for new to-do */}
      <form onSubmit={handleAddOrUpdateTodo} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={state.newTodo.title}
          onChange={(e) => handleInputChange(e, 'title')}
          className="todo-input border rounded p-2 w-full"
        />
        <input
          type="date"
          value={state.newTodo.dueDate}
          onChange={(e) => handleInputChange(e, 'dueDate')}
          className="todo-input border rounded p-2 w-full"
        />
        <textarea
          placeholder="Content"
          value={state.newTodo.content}
          onChange={(e) => handleInputChange(e, 'content')}
          className="todo-textarea border rounded p-2 w-full"
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {state.editingTodo ? 'Update Todo' : 'Add Todo'}
        </button>
      </form>

      {/* To-Do List */}
      <ul className="space-y-4 mt-4">
        {state.todos.map((todo) => (
          <li key={todo.id} className={`p-4 rounded border ${todo.completed ? 'bg-green-100' : 'bg-white'}`}>
            <div>
              <h3 className="text-lg font-bold">{todo.title}</h3>
              <p className="text-gray-600"><strong>Due Date:</strong> {todo.dueDate}</p>
              <p>{todo.content}</p>
            </div>
            <div className="flex space-x-2 mt-2">
              <button
                onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo.id })}
                className="bg-yellow-500 text-white px-2 py-1 rounded"
              >
                {todo.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
              </button>
              <button
                onClick={() => handleEditTodo(todo)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch({ type: 'REMOVE_TODO', payload: todo.id })}
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
