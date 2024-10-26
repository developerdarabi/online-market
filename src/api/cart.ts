import { CartType } from "../types/cart";
import { baseApi } from "./baseApi";

export const cartApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        carts: builder.query<CartType[], { userId: number }>({
            query: (body) => {
                return {
                    url: `/carts/user/` + body.userId,
                };
            },
            providesTags: ['carts'],
        }),
        addToCart: builder.query<any, { cart: CartType }>({
            query: (body) => {
                return {
                    url: `/carts/`,
                    method: 'post',
                    body: body.cart
                };
            },
        }),
    })
});

export const {
    useLazyCartsQuery,
    useLazyAddToCartQuery
} = cartApi;
