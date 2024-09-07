"use client";

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext } from 'react'

export const ProductsContext = createContext();

const ProductsProvider = ({ children }) => {

    const { data: products = [], refetch, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            try {
                const response = await axios.get(`https://furniflex-server-five.vercel.app/products`);
                if(response?.status === 200) {
                    return response?.data;
                }
            } catch (error) {
                console.log(error?.message);
            }
        }
    });

    return (
        <ProductsContext.Provider value={{ products, refetch, isLoading }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider;