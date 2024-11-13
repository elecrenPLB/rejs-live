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
import { CreateElement } from "./pages/CreateElement.jsx"
import { Jsx } from "./pages/Jsx.jsx"
import { Props } from "./pages/Props.jsx"
import { Conditions } from "./pages/Conditions.jsx"
import { Listes } from "./pages/Listes.jsx"
import { CssGlobal } from "./pages/CssGlobal.jsx"
import { CssInJs } from "./pages/CssInJs.jsx"
import { TailwindCss } from "./pages/TailwindCss.jsx"
import { CssModules } from "./pages/CssModules.jsx"
import { Children } from "./pages/Children.jsx"

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
      },
      {
        path: "/create-element",
        element: <CreateElement />
      },
      {
        path: "/jsx",
        element: <Jsx />
      },
      {
        path: "/props",
        element: <Props />
      },
      {
        path: "/conditions",
        element: <Conditions />
      },
      {
        path: "/listes",
        element: <Listes />
      },
      {
        path: "/css-global",
        element: <CssGlobal />
      },
      {
        path: "/css-in-js",
        element: <CssInJs />
      },
      {
        path: "/tailwind-css",
        element: <TailwindCss />
      },
      {
        path: "/css-modules",
        element: <CssModules />
      },
      {
        path: "/children",
        element: <Children />
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
