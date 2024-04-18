import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../types/types";

export interface UserInfo {
    fullName: string;
    email: string;
    otp: number;
    data: User; 
}

interface UserState {
    userInfo: UserInfo | null;
    isAuthenticated: boolean;
}

const storedUserInfo = localStorage.getItem("userInfo");
const parsedUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : null;

const initialState: UserState = {
    userInfo: parsedUserInfo,
    isAuthenticated: !!parsedUserInfo,
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp: (state, action: PayloadAction<UserInfo>) => {
            state.isAuthenticated = true;
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },

        signIn: (state, action: PayloadAction<UserInfo>) => {
            state.isAuthenticated = true;
            state.userInfo = action.payload;
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
        },

        logout: (state) => {
            state.isAuthenticated = false;
            state.userInfo = null;
            localStorage.removeItem("userInfo");
        },
    }
});

export const { signUp, signIn, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
