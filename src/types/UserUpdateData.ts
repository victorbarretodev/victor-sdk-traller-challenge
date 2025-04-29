import { User } from "./User"
import { UserFetchData } from "./UserFetchData"

export interface UserUpdateData extends UserFetchData {
   data?: {
        username?: string
        age?: number
        email?: string
   }
}


export interface UserUpdateDataResponse extends User {
    lastUpdated: Date;
    createdAt: Date;
 }