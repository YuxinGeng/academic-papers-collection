import Link from 'next/link';
import { FaArrowRight, FaBook, FaFolder } from 'react-icons/fa';
import PaperCard from '@/components/PaperCard';
import { getRecentPapers, categories, papers, getPapersByCategory } from '@/data/papers';

export default function Home() {
  const recentPapers = getRecentPapers(3);
  
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-10 px-4 bg-white rounded-lg shadow-sm">
        <FaBook className="mx-auto text-blue-600 mb-4" size={48} />
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Academic Papers Collection</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          A curated collection of academic papers for research and reference.
        </p>
        <div className="flex justify-center gap-4">
          <Link 
            href="/papers" 
            className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Browse All Papers
          </Link>
          <Link 
            href="/categories" 
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
          >
            View Categories
          </Link>
        </div>
      </section>

      {/* Recent Papers */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Recent Papers</h2>
          <Link href="/papers" className="text-blue-600 hover:text-blue-800 flex items-center">
            View all <FaArrowRight className="ml-1" size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPapers.map(paper => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Categories</h2>
          <Link href="/categories" className="text-blue-600 hover:text-blue-800 flex items-center">
            View all <FaArrowRight className="ml-1" size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const count = getPapersByCategory(category).length;
            return (
              <Link 
                key={category}
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
          })}
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-3xl font-bold text-blue-600">{papers.length}</p>
          <p className="text-gray-600">Total Papers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-3xl font-bold text-blue-600">{categories.length}</p>
          <p className="text-gray-600">Categories</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-3xl font-bold text-blue-600">
            {papers.filter(p => p.read).length}
          </p>
          <p className="text-gray-600">Read Papers</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <p className="text-3xl font-bold text-blue-600">
            {papers.filter(p => !p.read).length}
          </p>
          <p className="text-gray-600">Unread Papers</p>
        </div>
      </section>
    </div>
  );
}
