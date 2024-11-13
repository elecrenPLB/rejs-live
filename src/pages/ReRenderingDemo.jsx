import { useState } from "react"
import { BackTitle } from "../components/BackTitle"

// #region Composant lourd
const colors = ["red", "green", "blue", "yellow", "purple"]

function Background({ children }) {
  const [colorIndex, setColorIndex] = useState(0)

  function handleChangeColor() {
    setColorIndex((prev) => (prev + 1 >= colors.length ? 0 : prev + 1))
  }

  return (
    <div style={{ backgroundColor: colors[colorIndex] }} className="p-6">
      <button
        onClick={handleChangeColor}
        className="rounded border-none bg-slate-900 px-3 py-2 text-sm text-white"
      >
        Changer de couleur
      </button>
      <div className="mt-4">{children}</div>
    </div>
  )
}

function generateList() {
  return Array.from(
    { length: 20000 },
    (_, i) => `Item ${i + 1} - ${Math.random()}`
  )
}

function List() {
  const list = generateList()

  return (
    <ul>
      {list.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

// #endregion Composant lourd

function Parent() {
  const [_, render] = useState([])

  console.log("Parent re-rendered")

  return (
    <div className="border border-red-600 p-4">
      <button className="btn btn-primary" onClick={() => render([])}>
        Re-render
      </button>
      <div className="mt-4">
        <Child />
      </div>
    </div>
  )
}

function Child() {
  console.log("Child re-rendered")

  return <p className="border p-2 text-lg font-bold">Enfant</p>
}

export function ReRenderingDemo() {
  return (
    <div>
      <BackTitle title="Re-rendering" />
      <br />
      {/* <Parent /> */}
      <Background>
        <List />
      </Background>
    </div>
  )
}
