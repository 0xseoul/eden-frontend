import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { ILoading, ISelector } from "../interfaces/redux";
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

export const SET_WALLET = createAsyncThunk(
  "user/SET_WALLET", // define the thunk name
  async () => {
    try {
      if (!window.klaytn) return;
      const accounts = await window.klaytn.enable();
      return accounts[0];
    } catch (error) {
      return [];
    }
  }
);

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      SET_WALLET.fulfilled,
      (state, action: PayloadAction<string>) => {
        state.entities.wallet = action.payload;
      }
    );
  },
});

export default userSlice.reducer;

export const getWallet = (state: ISelector) => state.user.entities.wallet;
