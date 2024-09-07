import AuthHero from "@/components/Shared/AuthHero";
import SignUpBox from "@/components/SignUp/SignUpBox";

const SignUp = () => {
    return (
        <main className="flex">
            <SignUpBox />
            <AuthHero />
        </main>
    )
}

export default SignUp