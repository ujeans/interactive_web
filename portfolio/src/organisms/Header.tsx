import Logo from "../atoms/Logo";
import MenuButton from "../atoms/MenuButton";
import Navigation from "../molecules/Navigation";

const Navbar = () => {
  return (
    <nav className="flex justify-between  items-center m-4 p-2 border-b border-gray-300">
      <div className="flex items-center">
        <Logo />
        <Navigation />
      </div>

      <MenuButton />
    </nav>
  );
};

export default Navbar;
