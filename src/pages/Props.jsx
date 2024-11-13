import { BackTitle } from "../components/BackTitle"

function Greetings({ name }) {
  return <h1>Hello {name}</h1>
}

export function Props() {
  return (
    <div>
      <BackTitle title="Props" />
      <Greetings name="Erwan" />
    </div>
  )
}
