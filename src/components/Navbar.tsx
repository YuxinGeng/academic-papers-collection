import Link from 'next/link';
import { FaBook, FaHome, FaListAlt, FaTags } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <Link href="/" className="flex items-center text-xl font-bold mb-4 md:mb-0">
          <FaBook className="mr-2" /> Academic Papers Collection
        </Link>
        <div className="flex space-x-6">
          <NavLink href="/" icon={<FaHome />} text="Home" />
          <NavLink href="/papers" icon={<FaListAlt />} text="All Papers" />
          <NavLink href="/categories" icon={<FaTags />} text="Categories" />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ href, icon, text }: { href: string; icon: React.ReactNode; text: string }) => {
  return (
    <Link href={href} className="flex items-center hover:text-blue-300 transition-colors">
      <span className="mr-1">{icon}</span>
      <span>{text}</span>
    </Link>
  );
};

export default Navbar; 