import React, { useState, useEffect, useRef } from 'react';
import './Search.css';
import { NEWS, FEATUREDPUBLICATIONS, PUBLICATIONS } from '../../Util/data';

const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Combine all searchable content
  const allContent = [
    ...NEWS.map(item => ({ ...item, type: 'news', id: `news-${item.date}` })),
    ...FEATUREDPUBLICATIONS.map(item => ({ ...item, type: 'publication', id: `pub-${item.id}` })),
    ...PUBLICATIONS.map(item => ({ ...item, type: 'publication', id: `pub-${item.id}` }))
  ];

  // Search through content
  const searchContent = (searchQuery) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const filtered = allContent.filter(item => {
      const searchText = searchQuery.toLowerCase();
      const title = item.name || item.content || '';
      const authors = item.authors || '';
      const journal = item.journal || '';
      const date = item.date || '';

      return title.toLowerCase().includes(searchText) ||
             authors.toLowerCase().includes(searchText) ||
             journal.toLowerCase().includes(searchText) ||
             date.toLowerCase().includes(searchText);
    });

    setResults(filtered.slice(0, 8)); // Limit to 8 results
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (!isOpen) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => prev < results.length - 1 ? prev + 1 : prev);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        if (selectedIndex >= 0 && results[selectedIndex]) {
          handleResultClick(results[selectedIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setQuery('');
        setResults([]);
        setSelectedIndex(-1);
        break;
      default:
        break;
    }
  };

  // Handle result click
  const handleResultClick = (result) => {
    // Scroll to the section
    const targetId = result.type === 'news' ? 'news' : result.type === 'publication' ? 'publications' : 'about';
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Close search
    setIsOpen(false);
    setQuery('');
    setResults([]);
    setSelectedIndex(-1);
  };

  // Handle input change
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    searchContent(value);
  };

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
        setQuery('');
        setResults([]);
        setSelectedIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Global keyboard shortcut (Ctrl/Cmd + K)
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    document.addEventListener('keydown', handleGlobalKeyDown);
    return () => document.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  return (
    <div className="search-container" ref={searchRef}>
      {/* Search Trigger */}
      <div
        className="search-trigger"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
      >
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.35-4.35"></path>
        </svg>
        <span className="search-text">Search...</span>
        <div className="search-shortcut">
          <kbd>⌘</kbd>
          <kbd>K</kbd>
        </div>
      </div>

      {/* Search Modal */}
      {isOpen && (
        <div className="search-modal">
          <div className="search-input-container">
            <svg className="search-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.35-4.35"></path>
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder="Search publications, news, authors..."
              className="search-input"
            />
            <button
              className="search-close"
              onClick={() => {
                setIsOpen(false);
                setQuery('');
                setResults([]);
                setSelectedIndex(-1);
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          {/* Search Results */}
          {results.length > 0 && (
            <div className="search-results">
              {results.map((result, index) => (
                <div
                  key={result.id}
                  className={`search-result ${selectedIndex === index ? 'selected' : ''}`}
                  onClick={() => handleResultClick(result)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="result-type">{result.type}</div>
                  <div className="result-content">
                    <div className="result-title">
                      {result.name || result.content}
                    </div>
                    {result.authors && (
                      <div className="result-authors">{result.authors}</div>
                    )}
                    {result.journal && (
                      <div className="result-journal">{result.journal}</div>
                    )}
                    {result.date && (
                      <div className="result-date">{result.date}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {query && results.length === 0 && (
            <div className="search-no-results">
              No results found for "{query}"
            </div>
          )}

          <div className="search-footer">
            <div className="search-hint">
              Use <kbd>↑</kbd> <kbd>↓</kbd> to navigate, <kbd>Enter</kbd> to select, <kbd>Esc</kbd> to close
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;





