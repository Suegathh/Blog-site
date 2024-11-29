import React, { useReducer } from 'react';

const initialState = {
  students: [],
  newStudent: {
    name: '',
    age: '',
    grade: '',
    email: '',
    course: '',
    image: null, 
  },
  editingStudent: null,
};

function studentReducer(state, action) {
  switch (action.type) {
    case 'ADD_STUDENT':
      return {
        ...state,
        students: [
          ...state.students,
          {
            id: Date.now(),
            name: state.newStudent.name,
            age: state.newStudent.age,
            grade: state.newStudent.grade,
            email: state.newStudent.email,
            course: state.newStudent.course,
            image: state.newStudent.image, 
          },
        ],
        newStudent: { name: '', age: '', grade: '', email: '', course: '', image: null },
      };
    case 'UPDATE_STUDENT':
      return {
        ...state,
        students: state.students.map((student) =>
          student.id === action.payload.id
            ? { ...student, ...action.payload.updatedData }
            : student
        ),
        newStudent: { name: '', age: '', grade: '', email: '', course: '', image: null },
        editingStudent: null,
      };
    case 'SET_NEW_STUDENT_FIELD':
      return {
        ...state,
        newStudent: { ...state.newStudent, [action.payload.field]: action.payload.value },
      };
    case 'SET_NEW_STUDENT_IMAGE':
      return {
        ...state,
        newStudent: { ...state.newStudent, image: action.payload },
      };
    case 'SET_EDITING_STUDENT':
      return {
        ...state,
        editingStudent: action.payload,
        newStudent: {
          name: action.payload.name,
          age: action.payload.age,
          grade: action.payload.grade,
          email: action.payload.email,
          course: action.payload.course,
          image: action.payload.image,
        },
      };
    case 'REMOVE_STUDENT':
      return {
        ...state,
        students: state.students.filter((student) => student.id !== action.payload),
      };
    default:
      return state;
  }
}

function StudentForm() {
  const [state, dispatch] = useReducer(studentReducer, initialState);

  const handleInputChange = (event, field) => {
    dispatch({ type: 'SET_NEW_STUDENT_FIELD', payload: { field, value: event.target.value } });
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    dispatch({ type: 'SET_NEW_STUDENT_IMAGE', payload: file });
  };

  const handleAddOrUpdateStudent = (event) => {
    event.preventDefault();
    if (state.newStudent.name.trim() && state.newStudent.age.trim() && state.newStudent.grade.trim()) {
      if (state.editingStudent) {
        dispatch({
          type: 'UPDATE_STUDENT',
          payload: {
            id: state.editingStudent.id,
            updatedData: state.newStudent,
          },
        });
      } else {
        dispatch({ type: 'ADD_STUDENT' });
      }
    }
  };

  const handleEditStudent = (student) => {
    dispatch({ type: 'SET_EDITING_STUDENT', payload: student });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Student Registration</h1>

      <form onSubmit={handleAddOrUpdateStudent} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={state.newStudent.name}
          onChange={(e) => handleInputChange(e, 'name')}
          className="student-input border rounded p-2 w-full"
        />
        <input
          type="text"
          placeholder="Age"
          value={state.newStudent.age}
          onChange={(e) => handleInputChange(e, 'age')}
          className="student-input border rounded p-2 w-full"
        />
        <input
          type="text"
          placeholder="Grade"
          value={state.newStudent.grade}
          onChange={(e) => handleInputChange(e, 'grade')}
          className="student-input border rounded p-2 w-full"
        />
        <input
          type="email"
          placeholder="Email"
          value={state.newStudent.email}
          onChange={(e) => handleInputChange(e, 'email')}
          className="student-input border rounded p-2 w-full"
        />
        <input
          type="text"
          placeholder="Course"
          value={state.newStudent.course}
          onChange={(e) => handleInputChange(e, 'course')}
          className="student-input border rounded p-2 w-full"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="student-input border rounded p-2 w-full"
        />
        {state.newStudent.image && (
          <img
            src={URL.createObjectURL(state.newStudent.image)}
            alt="Preview"
            className="w-32 h-32 object-cover mt-2"
          />
        )}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {state.editingStudent ? 'Update Student' : 'Add Student'}
        </button>
      </form>

      <ul className="space-y-4 mt-4">
        {state.students.map((student) => (
          <li key={student.id} className="p-4 rounded border bg-white flex justify-between items-center">
            <div className="flex items-center">
              {student.image && (
                <img
                  src={URL.createObjectURL(student.image)}
                  alt={student.name}
                  className="w-16 h-16 object-cover mr-4 rounded-full"
                />
              )}
              <div>
                <h3 className="text-lg font-bold">{student.name}</h3>
                <p className="text-gray-600"><strong>Age:</strong> {student.age}</p>
                <p className="text-gray-600"><strong>Grade:</strong> {student.grade}</p>
                <p className="text-gray-600"><strong>Email:</strong> {student.email}</p>
                <p className="text-gray-600"><strong>Course:</strong> {student.course}</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => handleEditStudent(student)}
                className="bg-blue-500 text-white px-2 py-1 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => dispatch({ type: 'REMOVE_STUDENT', payload: student.id })}
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

export default StudentForm;
