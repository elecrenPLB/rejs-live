import { BackTitle } from "../components/BackTitle"

function destructuringExample() {
  const user = { name: "John", age: 25 }
  const { name, age } = user

  console.log(name, age) // John, 25
}

function spreadExample() {
  const user = { name: "John", age: 25 }
  const user2 = { ...user, age: 30, city: "Paris" }

  console.log(user) // { name: 'John', age: 25 }
  console.log(user2) // { name: 'John', age: 30, city: 'Paris' }
}

function spreadExampleArray() {
  const fruits = ["pomme", "banane", "cerise"]
  const fruits2 = [...fruits, "fraise"]

  console.log(fruits) // ["pomme", "banane", "cerise"]
  console.log(fruits2) // ["pomme", "banane", "cerise", "fraise"]
}

function restExample(...args) {
  const user = { name: "John", age: 25, city: "Paris", country: "France" }
  const { name, age, ...address } = user

  console.log(name, age, address) // John, 25, { city: 'Paris', country: 'France' }
  console.log(args) // [1, 2, 3, 4, 5]
}

export function Spread() {
  return (
    <div>
      <BackTitle title="Spread, rest et destructuration" />
      <div className="mt-6 flex items-center gap-4">
        <button className="btn btn-primary" onClick={destructuringExample}>
          Exécuter destructuration
        </button>
        <button className="btn btn-primary" onClick={spreadExample}>
          Exécuter spread
        </button>
        <button className="btn btn-primary" onClick={spreadExampleArray}>
          Exécuter spread tableau
        </button>
        <button
          className="btn btn-primary"
          onClick={() => restExample(1, 2, 3, 4, 5)}
        >
          Exécuter rest
        </button>
      </div>
    </div>
  )
}
