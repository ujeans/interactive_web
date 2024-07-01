import Logo from "../atoms/Logo";
import MenuButton from "../atoms/MenuButton";
import Navigation from "../molecules/Navigation";

const Navbar = () => {
  return (
    <nav className="flex justify-between  items-center mx-34 py-14 border-b border-color3">
      <div className="flex items-center">
        <Logo />
        <Navigation />
      </div>

      <MenuButton />
    </nav>
  );
};

export default Navbar;
