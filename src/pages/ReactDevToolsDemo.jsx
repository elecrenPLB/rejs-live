import { useState } from "react"
import { BackTitle } from "../components/BackTitle"

function Counter({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount)

  return (
    <div className="flex items-center gap-2">
      <p>Total : {count}</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        +1
      </button>
    </div>
  )
}

function Parent() {
  return (
    <div>
      <h2 className="text-xl font-bold">Parent</h2>
      <div className="p-6">
        <Counter initialCount={10} />
      </div>
    </div>
  )
}

export function ReactDevToolsDemo() {
  return (
    <div>
      <BackTitle title="React Dev Tools" />
      <br />
      <Parent />
    </div>
  )
}
