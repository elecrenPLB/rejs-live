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
import { EventsDemo } from "./pages/EventsDemo.jsx"
import { StateDemo } from "./pages/StateDemo.jsx"
import { ReRenderingDemo } from "./pages/ReRenderingDemo.jsx"
import { PropsStateDemo } from "./pages/PropsStateDemo.jsx"
import { FormDataDemo } from "./pages/FormDataDemo.jsx"
import { ControlledInputs } from "./pages/ControlledInputs.jsx"
import { UseRefDemo } from "./pages/UseRefDemo.jsx"
import { ReactDevToolsDemo } from "./pages/ReactDevToolsDemo.jsx"
import { HooksDemo } from "./pages/HooksDemo.jsx"
import { UseEffectDemo } from "./pages/UseEffectDemo.jsx"
import { ApiUseEffect } from "./pages/ApiUseEffect.jsx"
import { ApiLibrary } from "./pages/ApiLibrary.jsx"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

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
      },
      {
        path: "/evenements",
        element: <EventsDemo />
      },
      {
        path: "/state",
        element: <StateDemo />
      },
      {
        path: "/re-rendering",
        element: <ReRenderingDemo />
      },
      {
        path: "/props-vs-state",
        element: <PropsStateDemo />
      },
      {
        path: "/form-data",
        element: <FormDataDemo />
      },
      {
        path: "/inputs-controles",
        element: <ControlledInputs />
      },
      {
        path: "/use-ref",
        element: <UseRefDemo />
      },
      {
        path: "/react-dev-tools",
        element: <ReactDevToolsDemo />
      },
      {
        path: "/hooks",
        element: <HooksDemo />
      },
      {
        path: "/use-effect",
        element: <UseEffectDemo />
      },
      {
        path: "/use-effect-api",
        element: <ApiUseEffect />
      },
      {
        path: "/api-librairie",
        element: <ApiLibrary />
      }
    ],
    element: <RootLayout />
  }
])

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
)
