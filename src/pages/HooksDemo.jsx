import { useState } from "react"
import { BackTitle } from "../components/BackTitle"

function useCounter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  return { count, increment }
}

function Counter() {
  const { count, increment } = useCounter()

  return (
    <div className="flex items-center gap-2">
      <p>Total : {count}</p>
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>
    </div>
  )
}

function Counter2() {
  const { count, increment } = useCounter()

  return (
    <div className="flex items-center gap-2">
      <p>Total : {count}</p>
      <button onClick={increment} className="btn btn-primary">
        +1
      </button>
    </div>
  )
}

export function HooksDemo() {
  return (
    <div>
      <BackTitle title="Hooks" />
      <br />
      <Counter />
      <br />
      <Counter2 />
    </div>
  )
}
