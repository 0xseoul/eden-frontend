import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoading } from "../interfaces/redux";
import { IUser } from "../interfaces/user";

const user: IUser = {
  holding_nfts: [],
  wallet: "",
  isAdmin: false,
};

interface IInitialState {
  entities: IUser;
  loading: ILoading["loading"];
}

const initialState: IInitialState = {
  entities: user,
  loading: "idle",
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
