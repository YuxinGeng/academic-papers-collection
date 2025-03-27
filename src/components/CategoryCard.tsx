import Link from 'next/link';
import { FaFolder } from 'react-icons/fa';

interface CategoryCardProps {
  category: string;
  count: number;
}

const CategoryCard = ({ category, count }: CategoryCardProps) => {
  return (
    <Link 
      href={`/categories/${encodeURIComponent(category)}`}
      className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow p-5"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <FaFolder className="text-yellow-500 mr-3" size={24} />
          <h3 className="text-lg font-medium text-gray-800">{category}</h3>
        </div>
        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
          {count} papers
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard; 