import { BackTitle } from "../components/BackTitle"

function Greetings() {
  return <h1>Hello world !</h1>
}

export function Jsx() {
  return (
    <div>
      <BackTitle title="JSX" />
      <Greetings />
    </div>
  )
}
