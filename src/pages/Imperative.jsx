/* eslint-disable */
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

export const Imperative = () => {
  return <BackTitle title="Imperative vs Déclarative" />
}
