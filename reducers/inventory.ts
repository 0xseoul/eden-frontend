import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IInventory } from "../interfaces/inventory";
import { ILoading, ISelector } from "../interfaces/redux";

interface IInitialState {
  entities: IInventory;
  loading: ILoading["loading"];
}

const initialState: IInventory = {
  avatar: {
    _id: "",
    owner: "",
    token_id: 0,
    hair: null,
    clothing: null,
    eyes: null,
    mouth: null,
    off_hand: null,
    skin: null,
    background: null,
    base_image_url: "",
    overlapped_image_url: null,
  },
  clothes: [],
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {},
});

export default inventorySlice.reducer;
