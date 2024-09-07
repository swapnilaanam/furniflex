"use client";

import AuthHero from "@/components/Shared/AuthHero";
import SignUpBox from "@/components/SignUp/SignUpBox";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const SignUp = () => {
    const { loading, user } = useContext(AuthContext);

    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            return router.push('/products');
        }
    }, [user]);

    return (
        <main className="flex">
            <SignUpBox />
            <AuthHero />
        </main>
    )
}

export default SignUp