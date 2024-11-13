import { useRef } from "react"
import { BackTitle } from "../components/BackTitle"

function Form() {
  console.log("Render Form")
  const passwordRef = useRef(null)
  const confirmRef = useRef(null)

  function handleSubmit(event) {
    event.preventDefault()
    console.log(passwordRef.current?.value, confirmRef.current?.value)
  }

  function checkPasswords() {
    if (passwordRef.current?.value !== confirmRef.current?.value) {
      console.log("Les mots de passe ne correspondent pas")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <label className="flex items-center gap-2">
        Mot de passe
        <input
          type="password"
          ref={passwordRef}
          className="input input-bordered"
          onChange={checkPasswords}
        />
      </label>
      <label className="flex items-center gap-2">
        Confirmation du mot de passe
        <input
          type="password"
          ref={confirmRef}
          className="input input-bordered"
          onChange={checkPasswords}
        />
      </label>
      <input type="submit" value="Valider" className="btn btn-primary" />
    </form>
  )
}

export function UseRefDemo() {
  return (
    <div>
      <BackTitle title="Use Ref" />
      <br />
      <Form />
    </div>
  )
}
