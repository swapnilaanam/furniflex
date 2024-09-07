import Navbar from "@/components/Shared/Navbar";

const NavbarLayOut = ({ children }) => {
  return (
    <main>
      <Navbar />
      <main>
        {children}
      </main>
    </main>
  )
}

export default NavbarLayOut;