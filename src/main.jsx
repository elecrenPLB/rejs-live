import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import { Home } from "./pages/Home.jsx"
import { Variables } from "./pages/Variables.jsx"
import { Imperative } from "./pages/Imperative.jsx"
import { Arrow } from "./pages/Arrow.jsx"
import { Primitives } from "./pages/Primitives.jsx"
import { Spread } from "./pages/Spread.jsx"
import { Async } from "./pages/Async.jsx"
import { RootLayout } from "./RootLayout.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Home />,
        index: true
      },
      {
        path: "/variables",
        element: <Variables />
      },
      {
        path: "/imperative-vs-declarative",
        element: <Imperative />
      },
      {
        path: "/fonctions-flechees",
        element: <Arrow />
      },
      {
        path: "/primitives-vs-references",
        element: <Primitives />
      },
      {
        path: "/spread-rest-destructuration",
        element: <Spread />
      },
      {
        path: "/async",
        element: <Async />
      }
    ],
    element: <RootLayout />
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
