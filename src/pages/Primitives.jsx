import { BackTitle } from "../components/BackTitle"

const primitivesExample = () => {
  let a = 1
  let b = a // => La valeur 1 est copiée dans b. a et b sont indépendants

  b = 66

  console.log(a) // => 1
  console.log(b) // => 66
}

const referencesExample = () => {
  const user = { name: "John", age: 25 }
  const user2 = user // => La référence est copiée. user et user2 pointent sur le même objet

  user2.age = 40

  console.log(user.age) // => 40
  console.log(user2.age) // => 40
}

const referencesExampleArray = () => {
  const fruits = ["pomme", "banane", "cerise"]
  const fruits2 = fruits // => La référence est copiée. fruits et fruits2 pointent sur le même tableau

  fruits2.push("fraise")

  console.log(fruits) // => ["pomme", "banane", "cerise", "fraise"]
  console.log(fruits2) // => ["pomme", "banane", "cerise", "fraise"]
}

export const Primitives = () => {
  return (
    <div>
      <BackTitle title="Primitives vs Références" />
      <div className="mt-6 flex items-center gap-4">
        <button className="btn btn-primary" onClick={primitivesExample}>
          Exécuter primitives
        </button>
        <button className="btn btn-primary" onClick={referencesExample}>
          Exécuter références objet
        </button>
        <button className="btn btn-primary" onClick={referencesExampleArray}>
          Exécuter références tableau
        </button>
      </div>
    </div>
  )
}
