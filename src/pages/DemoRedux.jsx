import { useSelector } from "react-redux"
import { BackTitle } from "../components/BackTitle"
import { useRef } from "react"
import { useDispatch } from "react-redux"
import { loginUser, logoutUser } from "../slices/user-slice"

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

export function DemoRedux() {
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  return (
    <div>
      <BackTitle title="Redux" />
      <br />
      {user ? (
        <UserInfo user={user} logoutUser={() => dispatch(logoutUser())} />
      ) : (
        <AuthUser loginUser={(user) => dispatch(loginUser(user))} />
      )}
    </div>
  )
}
