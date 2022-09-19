// IInventoryClothes
export interface IInventory {
  avatar: IInventoryAvatar;
  clothes: IClothes[];
  searchedClothes: IClothes[];
  searchedAvatars: IInventoryAvatar[];
  searching: boolean;
  searchKeyword: string;
  clickedFilter: string;
  filteredClothes: IClothes[];
}

interface ICommonAvatar {
  _id: string;
  owner: string;
  token_id: number;
  base_image_url: string;
  overlapped_image_url: string | null;
}

export interface IClothes {
  _id: string;
  name: string;
  hash_number: number;
  image_url: string;
  type: string;
  token_id: number;
}

export interface IInventoryAvatar extends ICommonAvatar {
  hair: string | null;
  clothing: string | null;
  eyes: string | null;
  mouth: string | null;
  off_hand: string | null;
  skin: string | null;
  background: string | null;
}

export interface IGetAvatar extends ICommonAvatar {
  hair: IClothes;
  clothing: IClothes;
  eyes: IClothes;
  mouth: IClothes;
  off_hand: IClothes;
  skin: IClothes;
  background: IClothes;
}
