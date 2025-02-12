import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  username: string;
  timezone: string;
  availability: Record<string, string[]>;
}

interface UserState {
  users: Record<string, User>;
  currentUser: string | null;
}

const initialState: UserState = {
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
  
      const existingUsers = JSON.parse(
        localStorage.getItem("usersData") || "{}"
      );

      const updatedUsers = {
        ...existingUsers,
        ...state.users,
        [username]: { username, timezone, availability: {} },
      };

      state.users = updatedUsers;

      localStorage.setItem("usersData", JSON.stringify(updatedUsers));

      state.currentUser = username;
      localStorage.setItem("currentUser", username);
    },
    updateUser(state: any, action: any) {
      state.currentUser = action.payload.username;
      state.timezone = action.payload.timezone;
    },
  },
});

export const { setCurrentUser, addUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
