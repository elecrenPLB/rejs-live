import { BackTitle } from "../components/BackTitle"

function primitivesExample() {}

function referencesExample() {}

function referencesExampleArray() {}

export function Primitives() {
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
