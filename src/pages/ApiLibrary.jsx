import { useQuery } from "@tanstack/react-query"
import { BackTitle } from "../components/BackTitle"
import { useState } from "react"

function DisplayBitcoin() {
  const { data, isLoading, error, isFetching } = useQuery({
    queryKey: ["bitcoin"],
    queryFn: async () => {
      const res = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      )

      if (!res.ok) {
        throw new Error("Requête invalide")
      }

      return res.json()
    }
  })

  return (
    <>
      {isLoading && <p>Chargement en cours ...</p>}
      {isFetching && <p>Récupération des données ...</p>}
      {error && <p className="text-red-500">Error : {error?.message}</p>}
      {data && (
        <div>
          <p>Bitcoin en EUR : {data?.bpi?.EUR?.rate}</p>
          <p>Bitcoin en USD : {data?.bpi?.USD?.rate}</p>
        </div>
      )}
    </>
  )
}

export function ApiLibrary() {
  const [showSecond, setShowSecond] = useState(false)

  return (
    <div>
      <BackTitle title="API Library" />
      <br />
      <DisplayBitcoin />
      <br />
      <button
        onClick={() => setShowSecond(!showSecond)}
        className="btn btn-primary"
      >
        Afficher
      </button>
      {showSecond && (
        <>
          <br />
          <br />
          <DisplayBitcoin />
        </>
      )}
    </div>
  )
}
