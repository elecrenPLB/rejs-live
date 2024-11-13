import { BackTitle } from "../components/BackTitle"
import React from "react"

function Greetings() {
  const greetingsTitle = React.createElement("h1", {}, "Hello world !")

  return greetingsTitle
}

export function CreateElement() {
  return (
    <div>
      <BackTitle title="Create Element" />
      <Greetings />
    </div>
  )
}
