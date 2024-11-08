import { BackTitle } from "../components/BackTitle"

const getData = () =>
  new Promise((resolve) => setTimeout(() => resolve("data"), 1000))

const asyncExample = async () => {
  const data = await getData()

  console.log(data) // Attente de 1 seconde puis console.log(data)
}

export const Async = () => {
  return (
    <div>
      <BackTitle title="Asynchrone avec async/await" />
      <div className="mt-6 flex items-center gap-4">
        <button className="btn btn-primary" onClick={asyncExample}>
          Exécuter async
        </button>
      </div>
    </div>
  )
}
