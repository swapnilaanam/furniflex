"use client";

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { createContext, useContext } from 'react'
import { AuthContext } from './AuthProvider';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const { user } = useContext(AuthContext);

    const { data: cart = {}, refetch, isLoading } = useQuery({
        queryKey: ["cart", user?.email],
        queryFn: async () => {
            try {
                const response = await axios.get(`https://furniflex-server-five.vercel.app/carts/${user?.email}`);
                return response.data;
            } catch (error) {
                console.log(error?.message);
            }
        }
    });

    return (
        <CartContext.Provider value={{ cart, refetch, isLoading }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;