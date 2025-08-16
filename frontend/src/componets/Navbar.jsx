import { useAuthStore } from "../store/useAtuthStore";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();  

  return (
    <header>
        Navbar
    </header>
  )
}

export default Navbar