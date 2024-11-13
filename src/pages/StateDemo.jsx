import { useState } from "react"
import { BackTitle } from "../components/BackTitle"

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col gap-2">
      <p>Total : {count}</p>
      <button
        className="btn btn-primary w-fit"
        onClick={() => setCount(count + 1)}
      >
        Ajouter 1
      </button>
    </div>
  )
}

function CounterVariable() {
  let count = 0

  return (
    <div className="flex flex-col gap-2">
      <p>Total : {count}</p>
      <button className="btn btn-secondary w-fit" onClick={() => count++}>
        Ajouter 1
      </button>
    </div>
  )
}

export function StateDemo() {
  return (
    <div>
      <BackTitle title="State" />
      <br />
      <CounterVariable />
      <br />
      <br />
      <Counter />
    </div>
  )
}
