import { Common } from "./common";

export interface User extends Common {
  id : number;
  userName: string;
  email: string;

}