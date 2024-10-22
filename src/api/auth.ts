import { baseApi } from "./baseApi";

export const packsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.query<any, void>({
            query: () => {
                return {
                    url: `/auth/login`,
                    method:'post',
                    body: {
                        username: "mor_2314",
                        password: "83r5^_"
                    }
                };
            },
        }),
        userInfo: builder.query<any, void>({
            query: () => {
                return {
                    url: `/users/1`,
                };
            },
        }),
    })
});

export const {
    useLazyLoginQuery,
    useLazyUserInfoQuery
} = packsApi;
