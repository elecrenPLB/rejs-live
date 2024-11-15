import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Provider } from "react-redux"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./index.css"
import { ApiLibrary } from "./pages/ApiLibrary.jsx"
import { ApiUseEffect } from "./pages/ApiUseEffect.jsx"
import { Arrow } from "./pages/Arrow.jsx"
import { Async } from "./pages/Async.jsx"
import { Children } from "./pages/Children.jsx"
import { Conditions } from "./pages/Conditions.jsx"
import { ControlledInputs } from "./pages/ControlledInputs.jsx"
import { CreateElement } from "./pages/CreateElement.jsx"
import { CssGlobal } from "./pages/CssGlobal.jsx"
import { CssInJs } from "./pages/CssInJs.jsx"
import { CssModules } from "./pages/CssModules.jsx"
import { DemoContext } from "./pages/DemoContext.jsx"
import { DemoRedux } from "./pages/DemoRedux.jsx"
import { DemoUseReducer } from "./pages/DemoUseReducer.jsx"
import { DemoZustand } from "./pages/DemoZustand.jsx"
import { EventsDemo } from "./pages/EventsDemo.jsx"
import { FormDataDemo } from "./pages/FormDataDemo.jsx"
import { Home } from "./pages/Home.jsx"
import { HooksDemo } from "./pages/HooksDemo.jsx"
import { Imperative } from "./pages/Imperative.jsx"
import { Jsx } from "./pages/Jsx.jsx"
import { Listes } from "./pages/Listes.jsx"
import { Primitives } from "./pages/Primitives.jsx"
import { Props } from "./pages/Props.jsx"
import { PropsStateDemo } from "./pages/PropsStateDemo.jsx"
import { ReactDevToolsDemo } from "./pages/ReactDevToolsDemo.jsx"
import { ReRenderingDemo } from "./pages/ReRenderingDemo.jsx"
import { Spread } from "./pages/Spread.jsx"
import { StateDemo } from "./pages/StateDemo.jsx"
import { TailwindCss } from "./pages/TailwindCss.jsx"
import { UseEffectDemo } from "./pages/UseEffectDemo.jsx"
import { UseRefDemo } from "./pages/UseRefDemo.jsx"
import { Variables } from "./pages/Variables.jsx"
import { RootLayout } from "./RootLayout.jsx"
import { store } from "./stores/zz-redux-store.js"
import { ParamsProvider } from "./providers/params-provider.jsx"

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
      },
      {
        path: "/use-reducer",
        element: <DemoUseReducer />
      },
      {
        path: "/react-context",
        element: <DemoContext />
      },
      {
        path: "/redux",
        element: <DemoRedux />
      },
      {
        path: "/zustand",
        element: <DemoZustand />
      }
    ],
    element: <RootLayout />
  }
])

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <ParamsProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </ParamsProvider>
      </Provider>
    </QueryClientProvider>
  </StrictMode>
)
