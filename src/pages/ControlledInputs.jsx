import { useState } from "react"
import { BackTitle } from "../components/BackTitle"

function Form() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    console.log(name, email)
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <label className="flex items-center gap-2">
        Nom
        <input
          type="text"
          className="input input-bordered"
          value={name}
          onChange={(e) => {
            console.log(e.target.value)
            setName(e.target.value)
          }}
        />
      </label>
      <label className="flex items-center gap-2">
        Email
        <input
          type="email"
          className="input input-bordered"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <input type="submit" value="Valider" className="btn btn-primary" />
    </form>
  )
}

export function ControlledInputs() {
  return (
    <div>
      <BackTitle title="Inputs Contrôlés" />
      <br />
      <Form />
    </div>
  )
}
