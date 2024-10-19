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
        }),
        product: builder.query<ProductType, { id: string }>({
            query: ({id}) => {
                return {
                    url: `/products/`+id,
                };
            },
            //@ts-ignore
            providesTags: (result, error, arg) => [{ type: 'product', id: arg }]
        }),
    })
});

export const {
    useProductsQuery,
    useProductQuery
} = packsApi;
