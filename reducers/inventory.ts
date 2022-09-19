import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  IInventoryClothes,
  IInventory,
  ILoading,
  ISelector,
} from "../interfaces";

interface IInitialState {
  entities: IInventory;
  loading: ILoading["loading"];
}

const inventory: IInventory = {
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
  searchedAvatars: [],
  searchedClothes: [],
  searching: false,
  searchKeyword: "",

  clickedFilter: "all_items",
  filteredClothes: [],
};

const initialState: IInitialState = {
  entities: inventory,
  loading: "idle",
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    SET_SEARCHED_CLOTHES: (
      state,
      action: PayloadAction<IInventoryClothes[]>
    ) => {
      state.entities.searchedClothes = action.payload;
    },
    SET_SEARCH_KEYWORD: (state, action: PayloadAction<string>) => {
      state.entities.searchKeyword = action.payload;
    },
    SET_SEARCHING: (state, action: PayloadAction<boolean>) => {
      state.entities.searching = action.payload;
    },
    SET_CLICKED_FILTER: (state, action: PayloadAction<string>) => {
      const isSame = state.entities.clickedFilter === action.payload;
      isSame
        ? (state.entities.clickedFilter = "all_items")
        : (state.entities.clickedFilter = action.payload);
    },
    SET_FILTERD_CLOTHES: (
      state,
      action: PayloadAction<IInventoryClothes[]>
    ) => {
      state.entities.filteredClothes = action.payload;
    },
  },
});

export default inventorySlice.reducer;

export const {
  SET_SEARCHED_CLOTHES,
  SET_SEARCH_KEYWORD,
  SET_SEARCHING,
  SET_CLICKED_FILTER,
  SET_FILTERD_CLOTHES,
} = inventorySlice.actions;

// export const getAvatars = (state: ISelector) =>
//   state.user.entities.holding_avatars;
export const getSearchedClothes = (state: ISelector) =>
  state.inventory.entities.searchedClothes;

export const getSearching = (state: ISelector) =>
  state.inventory.entities.searching;

export const getSearchKeyword = (state: ISelector) =>
  state.inventory.entities.searchKeyword;

export const getClickedFilter = (state: ISelector) =>
  state.inventory.entities.clickedFilter;

export const getFilteredClothes = (state: ISelector) =>
  state.inventory.entities.filteredClothes;
