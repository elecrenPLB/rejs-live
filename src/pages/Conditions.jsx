import { BackTitle } from "../components/BackTitle"

function DisplayStock({ quantity }) {
  return (
    <p>
      {quantity > 0 ? `En stock : ${quantity}` : "Plus de stock disponible"}
    </p>
  )
}

function DisplayAuth({ loggedIn }) {
  if (loggedIn) {
    return <p>Utilisateur connecté</p>
  }

  return <p>Merci de vous connecter</p>
}

export function Conditions() {
  return (
    <div>
      <BackTitle title="Conditions" />
      <DisplayAuth loggedIn={true} />
      <br />
      <DisplayStock quantity={10} />
    </div>
  )
}
