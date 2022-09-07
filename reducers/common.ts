import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICommon, ILoading, ISelector } from "../interfaces/redux";
const common: ICommon = {};

interface IInitialState {
  entities: ICommon;
  loading: ILoading["loading"];
}

const initialState: IInitialState = {
  entities: common,
  loading: "idle",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {},
});

export default commonSlice.reducer;
