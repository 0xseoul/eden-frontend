export interface IInventory {
  avatar: IInventoryAvatar;
  clothes: IInventoryClothes[];
  searchedClothes: IInventoryClothes[];
  searchedAvatars: IInventoryAvatar[];
  searching: boolean;
  searchKeyword: string;
  clickedFilter: string;
  filteredClothes: IInventoryClothes[];
}

interface ICommonAvatar {
  _id: string;
  owner: string;
  token_id: number;
  base_image_url: string;
  overlapped_image_url: string | null;
}

export interface IInventoryClothes {
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
  hair: IInventoryClothes;
  clothing: IInventoryClothes;
  eyes: IInventoryClothes;
  mouth: IInventoryClothes;
  off_hand: IInventoryClothes;
  skin: IInventoryClothes;
  background: IInventoryClothes;
}
