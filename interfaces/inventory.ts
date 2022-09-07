export interface IInventory {
  avatar: IAvatar;
  clothes: IClothes[];
}
export interface IAvatar {
  _id: string;
  owner: string;
  token_id: number;
  hair: string | null;
  clothing: string | null;
  eyes: string | null;
  mouth: string | null;
  off_hand: string | null;
  skin: string | null;
  background: string | null;
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
