import Link from 'next/link';
import { FaArrowLeft, FaFolder } from 'react-icons/fa';
import PaperCard from '@/components/PaperCard';
import { getPapersByCategory, categories } from '@/data/papers';
import { notFound } from 'next/navigation';

export default function CategoryDetail({ params }: { params: { category: string } }) {
  const decodedCategory = decodeURIComponent(params.category);
  
  if (!categories.includes(decodedCategory)) {
    notFound();
  }
  
  const papers = getPapersByCategory(decodedCategory);
  
  return (
    <div>
      <Link href="/categories" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <FaArrowLeft className="mr-2" /> Back to all categories
      </Link>
      
      <div className="flex items-center mb-6">
        <FaFolder className="text-yellow-500 mr-3" size={32} />
        <h1 className="text-3xl font-bold text-gray-900">{decodedCategory}</h1>
      </div>
      
      <p className="text-gray-600 mb-6">
        {papers.length} {papers.length === 1 ? 'paper' : 'papers'} in this category
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {papers.map(paper => (
          <PaperCard key={paper.id} paper={paper} />
        ))}
      </div>
    </div>
  );
} 