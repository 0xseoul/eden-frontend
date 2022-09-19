import { IClothes } from "./inventory";

export interface IUser {
  wallet: string;
  holding_avatars: IUserAvatar[];
  holding_clothes: IClothes[];
  isAdmin?: boolean;
  signature: string[];
  isLoggedIn: boolean;
}

export interface IUserAvatar {
  _id: string;
  token_id: string;
  overlapped_image_url: string;
}
