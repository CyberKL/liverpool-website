import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: false,
    reducers: {
        setAuth: (state, action) => action.payload
    },
})

export const { setAuth } = authSlice.actions
export default authSlice.reducer;