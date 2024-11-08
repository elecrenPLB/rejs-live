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

function constVariables() {
  const name = "Jean"
  // const name = "Jean" => Erreur
}

export const Variables = () => {
  return (
    <div>
      <BackTitle title="Variables" />
      <div className="flex items-center gap-4 mt-6">
        <button className="btn btn-primary" onClick={oldVariables}>
          Exécuter var
        </button>
        <button className="btn btn-primary" onClick={newVariables}>
          Exécuter let
        </button>
        <button className="btn btn-primary" onClick={constVariables}>
          Exécuter const
        </button>
      </div>
    </div>
  )
}
