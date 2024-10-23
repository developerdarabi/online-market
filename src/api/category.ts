import { baseApi } from "./baseApi";

export const packsApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        categories: builder.query<string[], void>({
            query: () => {
                return {
                    url: `/products/categories`,
                };
            },
            providesTags: ['categories'],
            keepUnusedDataFor: 24 * 60 * 60
        }),
    })
});

export const {
    useCategoriesQuery,
} = packsApi;
