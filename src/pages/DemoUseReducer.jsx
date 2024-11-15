import { useReducer } from "react"
import { BackTitle } from "../components/BackTitle"

function countReducer(state, action) {
  if (action?.type === "INCREMENT") {
    return state + 1
  } else if (action?.type === "DECREMENT") {
    return state - 1
  } else if (action?.type === "RESET") {
    return 0
  }

  return state
}

function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0)

  return (
    <div className="flex items-center gap-2">
      <p>Total : {count}</p>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        +1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        -1
      </button>
      <button
        className="btn btn-primary"
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  )
}

export function DemoUseReducer() {
  return (
    <div>
      <BackTitle title="Use Reducer" />
      <br />
      <Counter />
    </div>
  )
}
