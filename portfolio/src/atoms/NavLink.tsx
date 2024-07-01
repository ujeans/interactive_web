interface NavLinkProps {
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label }) => {
  return (
    <a href="/" className="p-2 text-color3 hover:text-theme2">
      {label}
    </a>
  );
};

export default NavLink;
