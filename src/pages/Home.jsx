import { Link } from "react-router-dom"

export const Home = () => {
  return (
    <div>
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
      <ul className="mt-6 flex flex-wrap items-center gap-4">
        <li>
          <Link to="/create-element" className="btn btn-outline">
            Create Element
          </Link>
        </li>
        <li>
          <Link to="/jsx" className="btn btn-outline">
            JSX
          </Link>
        </li>
        <li>
          <Link to="/props" className="btn btn-outline">
            Props
          </Link>
        </li>
        <li>
          <Link to="/conditions" className="btn btn-outline">
            Conditions
          </Link>
        </li>
        <li>
          <Link to="/listes" className="btn btn-outline">
            Listes
          </Link>
        </li>
        <li>
          <Link to="/css-global" className="btn btn-outline">
            CSS Global
          </Link>
        </li>
        <li>
          <Link to="/css-modules" className="btn btn-outline">
            CSS Modules
          </Link>
        </li>
        <li>
          <Link to="/css-in-js" className="btn btn-outline">
            CSS in JS
          </Link>
        </li>
        <li>
          <Link to="/tailwind-css" className="btn btn-outline">
            Tailwind CSS
          </Link>
        </li>
        <li>
          <Link to="/children" className="btn btn-outline">
            Children
          </Link>
        </li>
      </ul>
    </div>
  )
}
