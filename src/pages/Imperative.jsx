import { BackTitle } from "../components/BackTitle"

function sumOddImperative() {
  const numbers = [1, 2, 3, 4, 5, 6]
  let sum = 0

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      sum += numbers[i]
    }
  }

  return sum
}

function sumOddDeclarative() {
  const numbers = [1, 2, 3, 4, 5, 6]

  return numbers
    .filter((number) => number % 2 !== 0)
    .reduce((acc, number) => acc + number, 0)
}

export function Imperative() {
  return (
    <div>
      <BackTitle title="Imperative vs Déclarative" />
      <div className="mt-6 flex items-center gap-4">
        <button
          className="btn btn-primary"
          onClick={() => console.log(sumOddImperative())}
        >
          Exécuter imperative
        </button>
        <button
          className="btn btn-primary"
          onClick={() => console.log(sumOddDeclarative())}
        >
          Exécuter déclarative
        </button>
      </div>
    </div>
  )
}
