import { BackTitle } from "../components/BackTitle"
import { useParams } from "../providers/params-provider"

function UserParams() {
  const { isDark, setIsDark } = useParams()

  return (
    <div className="flex items-center gap-4">
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={isDark}
          onChange={() => setIsDark(!isDark)}
        />{" "}
        Thème sombre
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" /> Affichage XL
      </label>
      <label className="flex items-center gap-2">
        <input type="checkbox" /> Affichage du menu
      </label>
    </div>
  )
}

export function DemoContext() {
  return (
    <div>
      <BackTitle title="React Context" />
      <br />
      <UserParams />
    </div>
  )
}
