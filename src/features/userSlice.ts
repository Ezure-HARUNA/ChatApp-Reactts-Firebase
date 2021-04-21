import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
// import { fetchCount } from "./counter/counterAPI";

export const userSlice = createSlice({
  name: "user",
  // ユーザー設定に必要な情報を追加
  //stringが型推論として入るS
  initialState: {
    user: { uid: "", photoUrl: "", displayName: "" },
  },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = { uid: "", photoUrl: "", displayName: "" };
    },
  },
});

export const { login, logout } = userSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectUser = (state: RootState) => state.user.user;

export default userSlice.reducer;
