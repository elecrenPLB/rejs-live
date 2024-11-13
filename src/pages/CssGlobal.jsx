import { BackTitle } from "../components/BackTitle"

function Button() {
  return <button className="btn-example-global">Cliquez ici</button>
}

export function CssGlobal() {
  return (
    <div>
      <BackTitle title="CSS Global" />
      <br />
      <Button />
    </div>
  )
}
