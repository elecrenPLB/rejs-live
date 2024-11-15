import { create } from "zustand"

export const useUserStore = create((set) => ({
  user: null,
  loginUser: (user) => set({ user }),
  updateUser: (user) => set((state) => ({ user: { ...state.user, ...user } })),
  logoutUser: () => set({ user: null })
}))
