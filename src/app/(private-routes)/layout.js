"use client";

import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation"
import { useContext, useEffect } from "react";

const PrivateRouteLayout = ({ children }) => {
    const { loading, user } = useContext(AuthContext);

    const router = useRouter();

    useEffect(() => {
        if (!loading && !user) {
            return router.push('/signin');
        }
    }, [user]);

    if (loading) {
        <div className="absolute left-0 w-full min-h-screen flex justify-center items-center bg-black" style={{ zIndex: "599" }}>
            <span className="loading loading-infinity loading-lg text-white"></span>
        </div>

    }

    if(!loading && user) {
        return children;
    }
}

export default PrivateRouteLayout;