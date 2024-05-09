// useReducer: simple Counter
// 💯 simulate setState with an object OR function
// http://localhost:3000/isolated/final/01.extra-3.js

import {useReducer} from 'react'

function reducer(state, action) {
  if (action.type === 'incremented_age') {
    return {
      age: state.age + 1,
    }
  }
  throw Error('Unknown action.')
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, {age: 42})

  return (
    <>
      <button
        onClick={() => {
          dispatch({type: 'incremented_age'})
        }}
      >
        Increment age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  )
}
