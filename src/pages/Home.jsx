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
      <ul className="mt-6 flex flex-wrap items-center gap-4">
        <li>
          <Link to="/evenements" className="btn btn-outline">
            Événements
          </Link>
        </li>
        <li>
          <Link to="/state" className="btn btn-outline">
            State
          </Link>
        </li>
        <li>
          <Link to="/re-rendering" className="btn btn-outline">
            Re-rendering
          </Link>
        </li>
        <li>
          <Link to="/props-vs-state" className="btn btn-outline">
            Props vs State
          </Link>
        </li>
        <li>
          <Link to="/form-data" className="btn btn-outline">
            Form Data
          </Link>
        </li>
        <li>
          <Link to="/inputs-controles" className="btn btn-outline">
            Inputs Contrôlés
          </Link>
        </li>
        <li>
          <Link to="/use-ref" className="btn btn-outline">
            Use Ref
          </Link>
        </li>
        <li>
          <Link to="/react-dev-tools" className="btn btn-outline">
            React Dev Tools
          </Link>
        </li>
      </ul>
      <ul className="mt-6 flex flex-wrap items-center gap-4">
        <li>
          <Link to="/hooks" className="btn btn-outline">
            Hooks
          </Link>
        </li>
        <li>
          <Link to="/use-effect" className="btn btn-outline">
            Use Effect
          </Link>
        </li>
        <li>
          <Link to="/use-effect-api" className="btn btn-outline">
            Use Effect API
          </Link>
        </li>
        <li>
          <Link to="/api-librairie" className="btn btn-outline">
            API Library
          </Link>
        </li>
      </ul>
    </div>
  )
}
