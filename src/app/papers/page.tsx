'use client';

import { useState } from 'react';
import { FaSearch, FaSortAlphaDown, FaSortAlphaUp, FaFilter } from 'react-icons/fa';
import PaperCard from '@/components/PaperCard';
import { papers, categories } from '@/data/papers';

export default function AllPapers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [readFilter, setReadFilter] = useState<'all' | 'read' | 'unread'>('all');

  // Filter papers based on search term, category and read status
  const filteredPapers = papers.filter(paper => {
    const matchesSearch = searchTerm === '' 
      || paper.title.toLowerCase().includes(searchTerm.toLowerCase())
      || paper.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()))
      || paper.abstract.toLowerCase().includes(searchTerm.toLowerCase())
      || paper.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === '' || paper.category === selectedCategory;
    
    const matchesReadStatus = readFilter === 'all' 
      || (readFilter === 'read' && paper.read)
      || (readFilter === 'unread' && !paper.read);
    
    return matchesSearch && matchesCategory && matchesReadStatus;
  });

  // Sort papers by date added
  const sortedPapers = [...filteredPapers].sort((a, b) => {
    const dateA = new Date(a.dateAdded).getTime();
    const dateB = new Date(b.dateAdded).getTime();
    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">All Papers</h1>
      
      {/* Search and Filter Controls */}
      <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Search */}
          <div className="relative flex-grow">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search papers, authors, keywords..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          {/* Sort Order */}
          <button
            className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50"
            onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
          >
            {sortOrder === 'desc' ? (
              <>
                <FaSortAlphaDown className="mr-2" />
                Newest First
              </>
            ) : (
              <>
                <FaSortAlphaUp className="mr-2" />
                Oldest First
              </>
            )}
          </button>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4">
          {/* Category Filter */}
          <div className="flex-grow">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
              <FaFilter className="inline mr-1" /> Category
            </label>
            <select
              id="category"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
          
          {/* Read Status Filter */}
          <div className="flex-grow">
            <label htmlFor="readStatus" className="block text-sm font-medium text-gray-700 mb-1">
              <FaFilter className="inline mr-1" /> Read Status
            </label>
            <select
              id="readStatus"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={readFilter}
              onChange={(e) => setReadFilter(e.target.value as 'all' | 'read' | 'unread')}
            >
              <option value="all">All Papers</option>
              <option value="read">Read</option>
              <option value="unread">Unread</option>
            </select>
          </div>
        </div>
      </div>
      
      {/* Results */}
      <div className="mb-4">
        <p className="text-gray-600">
          Showing {sortedPapers.length} of {papers.length} papers
        </p>
      </div>
      
      {/* Papers Grid */}
      {sortedPapers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedPapers.map(paper => (
            <PaperCard key={paper.id} paper={paper} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-lg shadow-sm">
          <p className="text-xl text-gray-600">No papers found matching your criteria.</p>
          <p className="text-gray-500 mt-2">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
} 