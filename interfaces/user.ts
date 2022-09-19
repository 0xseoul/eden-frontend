export interface IUser {
  wallet: string;
  holding_avatars: IUserAvatar[];
  holding_clothes: IUserClothes[];
  isAdmin?: boolean;
  signature: string[];
  isLoggedIn: boolean;
}

export interface IUserAvatar {
  _id: string;
  token_id: string;
  overlapped_image_url: string;
}

export interface IUserClothes {
  _id: string;
  name: string;
  hash_number: number;
  image_url: string;
  type: string;
  token_id: number;
  createdAt: string;
}
