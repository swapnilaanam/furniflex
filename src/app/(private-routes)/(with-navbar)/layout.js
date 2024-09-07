import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const NavbarLayOut = ({ children }) => {
  return (
    <main>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </main>
  )
}

export default NavbarLayOut;