/* eslint-disable */
import { BackTitle } from "../components/BackTitle"

function oldVariables() {
  var name = "Jean"
  var name = "Jean" //Pas d'erreur

  for (var i = 0; i < 10; i++) {
    var name = "Pierre" + i.toString()
  }

  console.log(name) // "Pierre9"
}

function newVariables() {
  let name = "Jean"
  // let name = "Jean" => Erreur

  for (let i = 0; i < 10; i++) {
    let name = "Pierre" + i.toString()
  }

  console.log(name) // "Jean"
}

export const Variables = () => {
  return <BackTitle title="Variables" />
}
