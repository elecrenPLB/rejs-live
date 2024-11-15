import { useRef } from "react"
import { BackTitle } from "../components/BackTitle"
import { useUserStore } from "../stores/zustand-user-store"

function UserInfo({ user, logoutUser }) {
  return (
    <div>
      <p>Username : {user?.username}</p>
      <p>Email : {user?.email}</p>
      <p>Password : {user?.password}</p>
      <button className="btn btn-error mt-6" onClick={logoutUser}>
        Logout
      </button>
    </div>
  )
}

function AuthUser({ loginUser }) {
  const username = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()

    if (
      username.current.value &&
      email.current.value &&
      password.current.value
    ) {
      loginUser({
        username: username.current.value,
        email: email.current.value,
        password: password.current.value
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="flex flex-col gap-1">
        <span className="font-bold">Username</span>
        <input className="input input-primary" type="text" ref={username} />
      </label>
      <label className="flex flex-col gap-1">
        <span className="font-bold">Email</span>
        <input className="input input-primary" type="email" ref={email} />
      </label>
      <label className="flex flex-col gap-1">
        <span className="font-bold">Password</span>
        <input className="input input-primary" type="password" ref={password} />
      </label>
      <input type="submit" className="btn btn-primary w-fit" />
    </form>
  )
}

export function DemoZustand() {
  const user = useUserStore((state) => state.user)
  const loginUser = useUserStore((state) => state.loginUser)
  const logoutUser = useUserStore((state) => state.logoutUser)

  return (
    <div>
      <BackTitle title="Zustand" />
      <br />
      {user ? (
        <UserInfo user={user} logoutUser={logoutUser} />
      ) : (
        <AuthUser loginUser={loginUser} />
      )}
    </div>
  )
}
