import axios from "axios";
import * as user from "./user";
export const baseApi = axios.create({ baseURL: "http://localhost:3001" });

export const api = { user };
