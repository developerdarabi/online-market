import { ProductType } from "../types/products";
import { baseApi } from "./baseApi";

export const cartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        carts: builder.query<ProductType[], { userId: number }>({
            query: (body) => {
                return {
                    url: `/carts/user/` + body.userId,
                };
            },
            providesTags: ['carts'],
        }),
    })
});

export const {
    useLazyCartsQuery,
} = cartApi;
