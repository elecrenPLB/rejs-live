import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    loginUser: (state, action) => {
      return action.payload
    },
    logoutUser: () => {
      return null
    },
    updateUser: (state, action) => {
      return { ...state, ...action.payload }
    }
  }
})

export const { loginUser, logoutUser, updateUser } = userSlice.actions

export const userReducer = userSlice.reducer
