import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommon, ILoading, ISelector } from "../interfaces/redux";

interface IInitialState {
  entities: ICommon;
  loading: ILoading["loading"];
}
const common: ICommon = {
  isClickedGoToMyInventory: false,
};

const initialState: IInitialState = {
  entities: common,
  loading: "idle",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setIsClickedGoToMyInventory: (
      state,
      action: PayloadAction<boolean>
    ): void => {
      state.entities.isClickedGoToMyInventory = action.payload;
    },
  },
});

export default commonSlice.reducer;
export const { setIsClickedGoToMyInventory } = commonSlice.actions;

export const getIsClickedGoToMyInventory = (state: ISelector): boolean =>
  state.common.entities.isClickedGoToMyInventory;
