import AuthHero from "@/components/Shared/AuthHero";
import SignInBox from "@/components/SignIn/SignInBox";

const SignIn = () => {
  return (
      <main className="flex">
          <SignInBox />
          <AuthHero />
      </main>
  )
};

export default SignIn;