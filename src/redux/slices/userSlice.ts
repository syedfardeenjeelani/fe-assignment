import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: any = {
  users: JSON.parse(localStorage.getItem("usersData") || "{}"),
  currentUser: localStorage.getItem("currentUser") || null,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setCurrentUser(state, action: PayloadAction<string>) {
      state.currentUser = action.payload;
      localStorage.setItem("currentUser", action.payload);
    },


    addUser(
      state,
      action: PayloadAction<{ username: string; timezone: string }>
    ) {
      const { username, timezone } = action.payload;
      if (!state.users[username]) {
        state.users[username] = { username, timezone, availability: {} };
        localStorage.setItem("usersData", JSON.stringify(state.users));
      }
      state.currentUser = username;
      localStorage.setItem("currentUser", username);
    },
  },
});

export const { setCurrentUser, addUser } = userSlice.actions;
export default userSlice.reducer;
