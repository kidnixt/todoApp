import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setLoginUser: (state, action) => {
            state.user = action.payload;
        },
        setLogoutUser: (state) => {
            state.user = null;
        }
    },
})
export const { setLoginUser, setLogoutUser } = userSlice.actions;
export default userSlice.reducer;
