import { useContext } from "react"
import { useMemo } from "react"
import { useState } from "react"
import { createContext } from "react"

const ParamsContext = createContext(null)

export function ParamsProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  // value n'est plus modifiée entre les re-renders
  // value est modifiée uniquement si isDark change (tableau de dépendances)
  const value = useMemo(() => ({ isDark, setIsDark }), [isDark])

  return (
    <ParamsContext.Provider value={value}>{children}</ParamsContext.Provider>
  )
}

// eslint-disable-next-line
export function useParams() {
  const context = useContext(ParamsContext)

  if (!context) {
    throw new Error("useParams must be used within a ParamsProvider")
  }

  return context
}
