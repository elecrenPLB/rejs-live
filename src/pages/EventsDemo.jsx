import { BackTitle } from "../components/BackTitle"

function Button({ children }) {
  function handleClick() {
    alert("Button clicked")
  }

  return (
    <button
      className="rounded-md bg-blue-600 px-3 py-2 text-white"
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

function Button2({ children }) {
  return (
    <button
      className="btn btn-primary"
      onClick={() => alert("Button2 clicked")}
    >
      {children}
    </button>
  )
}

function Card() {
  function handleCardClick(event) {
    console.log("Card clicked")
    console.log(event.target)
  }

  function handleButtonClick(event) {
    console.log("Button clicked")
    event.stopPropagation()
    console.log(event.target)
  }

  return (
    <div className="card border shadow" onClick={handleCardClick}>
      <div className="card-body">
        <button className="btn btn-primary w-fit" onClick={handleButtonClick}>
          Cliquez ici
        </button>
      </div>
    </div>
  )
}

export function EventsDemo() {
  return (
    <div>
      <BackTitle title="Événements" />
      <br />
      <Button>Cliquez ici</Button>
      <br />
      <br />
      <Button2>Cliquez ici</Button2>
      <br />
      <br />
      <Card />
    </div>
  )
}
