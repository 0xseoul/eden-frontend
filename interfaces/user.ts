export interface IUser {
  wallet: string;
  holding_avatars: IAvatar[];
  holding_clothes: IClothes[];
  isAdmin?: boolean;
  signature: string[];
  isLoggedIn: boolean;
}

export interface IAvatar {
  _id: string;
  token_id: string;
  overlapped_image_url: string;
}

export interface IClothes {
  _id: string;
  name: string;
  hash_number: number;
  image_url: string;
  type: string;
  token_id: number;
  createdAt: string;
}
