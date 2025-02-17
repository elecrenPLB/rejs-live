import { CircleChevronLeftIcon } from "lucide-react"
import { Link } from "react-router-dom"

export function BackTitle({ title = "" }) {
  return (
    <div className="flex items-center gap-2">
      <Link to="/" className="btn btn-ghost">
        <CircleChevronLeftIcon />
      </Link>
      <h1 className="text-xl font-bold">{title}</h1>
    </div>
  )
}
