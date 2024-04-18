import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserInfo {
    firstname: string;
    lastname: string;
    password: string | number;
    email: string;
}

interface UserState {
    userInfo: UserInfo[]; 
    isAuthenticated: boolean;
}

const storedUserInfo = localStorage.getItem("userInfo");
const parsedUserInfo = storedUserInfo ? JSON.parse(storedUserInfo) : [];

const initialState: UserState = {
    userInfo: Array.isArray(parsedUserInfo) ? parsedUserInfo : [], 
    isAuthenticated: false
};

export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        signUp: (state, action: PayloadAction<UserInfo>) => {
            state.isAuthenticated = true;
            state.userInfo.push(action.payload);
            localStorage.setItem("userInfo", JSON.stringify(state.userInfo));
        }
    }
});

export const { signUp } = AuthSlice.actions;

export default AuthSlice.reducer;
