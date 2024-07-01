interface NavLinkProps {
  label: string;
}

const NavLink: React.FC<NavLinkProps> = ({ label }) => {
  return (
    <a href="/" className="p-2 text-gray-700 hover:text-gray-900">
      {label}
    </a>
  );
};

export default NavLink;
