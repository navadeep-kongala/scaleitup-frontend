/*
  SEARCHBAR.JSX
  -------------
  Search input used on the Blog page. As the user types, the parent
  page filters which posts are shown by passing an onSearch callback.

  Usage:
    const [query, setQuery] = useState('');
    <SearchBar value={query} onSearch={setQuery} placeholder="Search articles..." />
*/
import './SearchBar.css';

export default function SearchBar({ value, onSearch, placeholder = 'Search...' }) {
  return (
    <div className="searchbar">
      {/* Magnifier icon — inline SVG, no library needed */}
      <svg className="searchbar__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>

      <input
        type="search"
        className="searchbar__input"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />

      {/* Clear button — only shows when there's something typed */}
      {value && (
        <button
          className="searchbar__clear"
          onClick={() => onSearch('')}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  );
}