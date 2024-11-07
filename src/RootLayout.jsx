import { Outlet } from "react-router-dom"

export const RootLayout = () => {
  return (
    <main className="p-6">
      <Outlet />
    </main>
  )
}
