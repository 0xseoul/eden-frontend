import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommon, ILoading, ISelector } from "../interfaces";

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
    SET_IS_CLICKED_GO_TO_MY_INVENTORY: (
      state,
      action: PayloadAction<boolean>
    ): void => {
      state.entities.isClickedGoToMyInventory = action.payload;
    },
  },
});

export default commonSlice.reducer;
export const { SET_IS_CLICKED_GO_TO_MY_INVENTORY } = commonSlice.actions;

export const getIsClickedGoToMyInventory = (state: ISelector): boolean =>
  state.common.entities.isClickedGoToMyInventory;
