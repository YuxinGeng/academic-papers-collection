import { FaFolder } from 'react-icons/fa';
import Link from 'next/link';
import { categories, getPapersByCategory } from '@/data/papers';

export default function Categories() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Paper Categories</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const count = getPapersByCategory(category).length;
          return (
            <Link 
              key={category}
              href={`/categories/${encodeURIComponent(category)}`}
              className="block bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FaFolder className="text-yellow-500 mr-4" size={32} />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
                    <p className="text-gray-600">{count} {count === 1 ? 'paper' : 'papers'}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
} 