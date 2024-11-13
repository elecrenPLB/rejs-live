import { useState } from "react"
import { BackTitle } from "../components/BackTitle"

function Counter({ name }) {
  const [value, setValue] = useState(0)

  return (
    <div>
      <p>{name}</p>
      <div className="flex items-center gap-2">
        <p>{value}</p>
        <button className="btn btn-ghost" onClick={() => setValue(value + 1)}>
          +1
        </button>
      </div>
    </div>
  )
}

function KeyDemo() {
  const [counters, setCounters] = useState([
    "Counter 1",
    "Counter 2",
    "Counter 3"
  ])

  function handleDelete(indexToDelete) {
    setCounters(counters.filter((_, index) => index !== indexToDelete))
  }

  return (
    <ul>
      {counters.map((counter, index) => (
        <li key={index}>
          <span>Clé {index}</span>
          <Counter name={counter} />
          <button className="btn btn-ghost" onClick={() => handleDelete(index)}>
            Supprimer le counter
          </button>
        </li>
      ))}
    </ul>
  )
}

function FruitsList() {
  const fruits = ["banane", "orange", "fraise"]
  const fruitsJsx = fruits.map((fruit) => {
    return <li key={fruit}>{fruit}</li>
  })

  return <ul>{fruitsJsx}</ul>
}

export function Listes() {
  return (
    <div>
      <BackTitle title="Listes" />
      <FruitsList />
      <br />
      <hr />
      <br />
      <KeyDemo />
    </div>
  )
}
