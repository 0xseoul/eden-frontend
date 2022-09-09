import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import Caver from "caver-js";
import { ILoading, ISelector, SetWalletProps } from "../interfaces/redux";
import { IAvatar, IClothes, IUser } from "../interfaces/user";
import { getSigner } from "../utils/caver-interact";

const user: IUser = {
  holding_avatars: [],
  holding_clothes: [],
  wallet: "",
  signature: [],
  isAdmin: false,
  isLoggedIn: false,
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
      const caver = new Caver(window.klaytn);
      const accounts = await window.klaytn.enable();
      const wallet = accounts[0];
      const signature = (await getSigner(
        caver,
        accounts[0],
        `sign to login to eden ${accounts[0]}`
      )) as string[];

      return { wallet, signature };
    } catch (error) {
      return [];
    }
  }
);

// interface TypedPayloadAction<T> extends PayloadAction<T> {}

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    SET_AVATARS: (state, action: PayloadAction<IAvatar[]>) => {
      state.entities.holding_avatars = action.payload;
    },
    SET_CLOTHES: (state, action: PayloadAction<IClothes[]>) => {
      state.entities.holding_clothes = action.payload;
    },
    SET_LOGGED_IN: (state, action: PayloadAction<boolean>) => {
      state.entities.isLoggedIn = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(SET_WALLET.fulfilled, (state, action) => {
      if (!action.payload) return;
      const { wallet, signature } = action.payload as SetWalletProps;
      state.entities.wallet = wallet;
      state.entities.signature = signature;
    });
  },
});

export default userSlice.reducer;

export const { SET_AVATARS, SET_LOGGED_IN, SET_CLOTHES } = userSlice.actions;

export const getWallet = (state: ISelector) => state.user.entities.wallet;
export const getSignature = (state: ISelector) => state.user.entities.signature;
export const getIsLoggedIn = (state: ISelector) =>
  state.user.entities.isLoggedIn;

export const getAvatars = (state: ISelector) =>
  state.user.entities.holding_avatars;

export const getClothes = (state: ISelector) =>
  state.user.entities.holding_clothes;
