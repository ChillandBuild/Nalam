import { HashLink } from 'react-router-hash-link';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, children, onClick }: NavLinkProps) => {
  return (
    <HashLink 
      smooth
      to={href} 
      className="text-gray-600 hover:text-[#F97316] transition-all duration-300 font-medium px-4 py-2 hover:bg-[#FFF7ED]/10 border border-transparent hover:border-[#F97316]/20 backdrop-blur-md hover:shadow-sm rounded-full"
      onClick={onClick}
    >
      {children}
    </HashLink>
  );
};

export default NavLink;
