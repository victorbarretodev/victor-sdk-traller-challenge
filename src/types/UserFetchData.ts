import { User } from "./User"

export interface UserFetchData {
    token: string
    userId: number
}


export interface UserFetchDataResponse extends User {
    lastUpdated: Date;
    createdAt: Date;
}