import { useReducer } from "react";

const initialState = {count: 0};

function counterReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1}
    case "DECREMENT":
      return { count: state.count - 1}
    default:
      return state;
  }
}
function About() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

    return (
        <div>
          <h1 className="text-3xl font-bold underline">Count: {state.count}</h1>
          <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
          <button onClick={() => dispatch({type: 'DECREMENT'})}>Decrement</button>
          
        </div>
       );
}

export default About;