import { ProductType } from "../types/products";
import { baseApi } from "./baseApi";

export const packsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        products: builder.query<ProductType[], void>({
            query: () => {
                return {
                    url: `/products`,
                };
            },
            providesTags: ['products'],
            keepUnusedDataFor: 24 * 60 * 60
        }),
        product: builder.query<ProductType, { id: string }>({
            query: ({ id }) => {
                return {
                    url: `/products/` + id,
                };
            },
            keepUnusedDataFor: 24 * 60 * 60,
            //@ts-ignore
            providesTags: (result, error, arg) => [{ type: 'product', id: arg }]
        }),
    })
});

export const {
    useProductsQuery,
    useProductQuery
} = packsApi;
