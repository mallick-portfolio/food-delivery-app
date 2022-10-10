// Or from '@reduxjs/toolkit/query' if not using the auto-generated hooks
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
  }),
  tagTypes: ["Carts"],
  endpoints: (build) => ({
    addToCart: build.mutation({
      query(body) {
        return {
          url: `cart/`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["Carts"],
    }),
  }),
});

export const { useAddToCartMutation } = cartApi;
