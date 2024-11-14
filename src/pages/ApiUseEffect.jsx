import { useEffect, useState } from "react"
import { BackTitle } from "../components/BackTitle"

export function ApiUseEffect() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()

    async function fetchAge(name) {
      setIsLoading(true)
      try {
        const res = await fetch(`https://api.agify.io?name=${name}`, {
          signal: abortController.signal
        })

        if (!res.ok) {
          throw new Error("Requête invalide")
        }

        const data = await res.json()
        await new Promise((resolve) => setTimeout(resolve, 500))

        setAge(data?.age)
        setError(null)
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error)
        }
      } finally {
        setIsLoading(false)
      }
    }

    fetchAge(name)

    return () => abortController.abort()
  }, [name])

  return (
    <div>
      <BackTitle title="Use Effect API" />
      <br />
      <input
        className="input input-primary"
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <div className="mt-6 flex flex-col gap-4">
        {isLoading && <p>Chargement en cours ...</p>}
        {error && <p className="text-red-500">Error : {error?.message}</p>}
        {age && <p>Âge : {age}</p>}
      </div>
    </div>
  )
}
