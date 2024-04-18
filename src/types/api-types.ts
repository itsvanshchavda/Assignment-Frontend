
import {User , Product} from './types'


export type UserResponse = {
    user: User;
    token: string;
}

export type ProductResponse = {
    products: Product[];
}