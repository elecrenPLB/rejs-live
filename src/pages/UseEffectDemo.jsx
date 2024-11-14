import { useEffect } from "react"
import { BackTitle } from "../components/BackTitle"
import { useState } from "react"

function Counter() {
  const [count, setCount] = useState(0)
  console.log("render", count)

  useEffect(() => {
    console.log("useEffect", count)
  }, [count])

  return (
    <div className="flex items-center gap-2">
      <p>Total : {count}</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-primary">
        +1
      </button>
    </div>
  )
}

export function UseEffectDemo() {
  const [lastKey, setLastKey] = useState(null)

  useEffect(() => {
    function handleKeyDown(event) {
      setLastKey(event.key)
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  return (
    <div>
      <BackTitle title="Use Effect" />
      <br />
      <p>Dernière touche : {lastKey}</p>
      <br />
      <Counter />
    </div>
  )
}
