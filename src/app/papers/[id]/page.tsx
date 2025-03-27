import Link from 'next/link';
import { FaArrowLeft, FaExternalLinkAlt, FaRegCalendarAlt, FaTag, FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import { getPaperById } from '@/data/papers';
import { notFound } from 'next/navigation';

export default function PaperDetail({ params }: { params: { id: string } }) {
  const paper = getPaperById(params.id);
  
  if (!paper) {
    notFound();
  }
  
  return (
    <div>
      <Link href="/papers" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
        <FaArrowLeft className="mr-2" /> Back to all papers
      </Link>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-center mb-4">
          <span className="mr-2">
            {paper.read ? (
              <span className="text-green-500" title="Read">
                <FaCheckCircle size={20} />
              </span>
            ) : (
              <span className="text-gray-400" title="Unread">
                <FaRegCircle size={20} />
              </span>
            )}
          </span>
          <h1 className="text-3xl font-bold text-gray-900">{paper.title}</h1>
        </div>
        
        <div className="flex flex-wrap text-sm text-gray-600 mb-6">
          <div className="mr-6 mb-2">
            <strong>Authors:</strong> {paper.authors.join(', ')}
          </div>
          <div className="mr-6 mb-2">
            <strong>Venue:</strong> {paper.venue} {paper.year}
          </div>
          <div className="flex items-center mr-6 mb-2">
            <FaRegCalendarAlt className="mr-1" />
            <span>Added on {new Date(paper.dateAdded).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center mb-2">
            <FaTag className="mr-1" />
            <Link 
              href={`/categories/${encodeURIComponent(paper.category)}`}
              className="text-blue-600 hover:text-blue-800"
            >
              {paper.category}
            </Link>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Abstract</h2>
          <div className="prose max-w-none">
            <p>{paper.abstract}</p>
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Keywords</h2>
          <div className="flex flex-wrap gap-2">
            {paper.keywords.map((keyword, index) => (
              <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                {keyword}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Notes</h2>
          <div className="prose max-w-none bg-gray-50 p-4 rounded-md">
            <p>{paper.notes}</p>
          </div>
        </div>
        
        <div className="flex justify-center">
          <a 
            href={paper.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            View Paper <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </div>
  );
} 