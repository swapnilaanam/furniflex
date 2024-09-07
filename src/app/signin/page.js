"use client";

import AuthHero from "@/components/Shared/AuthHero";
import SignInBox from "@/components/SignIn/SignInBox";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const SignIn = () => {
  const {loading, user} = useContext(AuthContext);

  const router = useRouter();

  useEffect(() => {
    if(!loading && user) {
      return router.push('/products');
    }
  }, [user]);

  return (
      <main className="flex">
          <SignInBox />
          <AuthHero />
      </main>
  )
};

export default SignIn;