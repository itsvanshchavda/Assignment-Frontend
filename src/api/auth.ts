import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserResponse } from "../types/api-types";

// Define endpoints
const baseUrl = import.meta.env.VITE_API_URL;

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl, fetchFn: (input, init) => fetch(input, { ...init, credentials: 'include' }) }),
    endpoints: (builder) => ({
        register: builder.mutation<UserResponse, string>({
            query: (userData: string) => ({
                url: '/auth/signup',
                method: 'POST',
                body: userData,
            }),
        }),

        login: builder.mutation<UserResponse, string>({
            query: (userData: string) => ({
                url: '/auth/signin',
                method: 'POST',
                body: userData,
            }),
        }),
    }),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
