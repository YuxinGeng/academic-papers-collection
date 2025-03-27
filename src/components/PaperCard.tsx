import Link from 'next/link';
import { FaExternalLinkAlt, FaCheckCircle, FaRegCircle } from 'react-icons/fa';
import type { Paper } from '@/data/papers';

interface PaperCardProps {
  paper: Paper;
}

const PaperCard = ({ paper }: PaperCardProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-5">
        <div className="flex justify-between items-start">
          <Link href={`/papers/${paper.id}`} className="text-xl font-semibold text-blue-600 hover:text-blue-800 mb-2 flex-grow">
            {paper.title}
          </Link>
          <div className="ml-2 flex-shrink-0">
            {paper.read ? (
              <span className="text-green-500 flex items-center" title="Read">
                <FaCheckCircle />
              </span>
            ) : (
              <span className="text-gray-400 flex items-center" title="Unread">
                <FaRegCircle />
              </span>
            )}
          </div>
        </div>
        
        <div className="text-sm text-gray-500 mb-3">
          {paper.authors.join(', ')} • {paper.venue} {paper.year}
        </div>
        
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {paper.abstract}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {paper.keywords.map((keyword, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {keyword}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-xs text-gray-500">Added: {new Date(paper.dateAdded).toLocaleDateString()}</span>
          <div className="flex">
            <a 
              href={paper.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
            >
              View Paper <FaExternalLinkAlt size={12} className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperCard; 