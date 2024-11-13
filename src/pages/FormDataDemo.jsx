import { BackTitle } from "../components/BackTitle"

function Form() {
  function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)

    formData.forEach((value, key) => {
      console.log(key, value)
    })
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-4">
      <label className="flex items-center gap-2">
        Nom
        <input type="text" name="name" className="input input-bordered" />
      </label>
      <label className="flex items-center gap-2">
        Email
        <input type="email" name="email" className="input input-bordered" />
      </label>
      <input type="submit" value="Valider" className="btn btn-primary" />
    </form>
  )
}

export function FormDataDemo() {
  return (
    <div>
      <BackTitle title="Form Data" />
      <br />
      <Form />
    </div>
  )
}
