import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <ul className="flex flex-wrap items-center gap-4">
      <li>
        <Link to="/variables" className="btn btn-outline">
          Variables
        </Link>
      </li>
      <li>
        <Link to="/imperative-vs-declarative" className="btn btn-outline">
          Impérative vs Déclarative
        </Link>
      </li>
      <li>
        <Link to="/fonctions-flechees" className="btn btn-outline">
          Fonctions fléchées
        </Link>
      </li>
      <li>
        <Link to="/primitives-vs-references" className="btn btn-outline">
          Primitives vs Références
        </Link>
      </li>
      <li>
        <Link to="/spread-rest-destructuration" className="btn btn-outline">
          Spread, rest et destructuration
        </Link>
      </li>
      <li>
        <Link to="/async" className="btn btn-outline">
          Asynchrone avec async/await
        </Link>
      </li>
    </ul>
  )
}
