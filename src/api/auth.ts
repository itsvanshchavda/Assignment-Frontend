import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ProductResponse, UserResponse } from "../types/api-types";

// Define endpoints
const baseUrl = import.meta.env.VITE_API_URL

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({


        register: builder.mutation<UserResponse, string>({
            query: (userData:string) => ({
                url: '/auth/register',
                method: 'POST',
                body:userData,
            }),
        }),

        login:builder.mutation<UserResponse, string>({
            query: (userData:string) => ({
                url: '/auth/login',
                method: 'POST',
                body:userData,
            }),
        }),
    }),


});


export const {useRegisterMutation } = authApi;
