import Link from 'next/link';
import { FaExclamationTriangle, FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <FaExclamationTriangle className="text-yellow-500 mb-6" size={64} />
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Not Found</h1>
      <p className="text-xl text-gray-600 mb-8">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
      >
        <FaHome className="mr-2" /> Go to Home Page
      </Link>
    </div>
  );
} 