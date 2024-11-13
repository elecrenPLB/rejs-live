import { BackTitle } from "../components/BackTitle"

function Button() {
  return (
    <button className="rounded border-none bg-teal-900 px-3 py-2 text-white">
      Cliquez ici
    </button>
  )
}

export function TailwindCss() {
  return (
    <div>
      <BackTitle title="Tailwind CSS" />
      <br />
      <Button />
    </div>
  )
}
