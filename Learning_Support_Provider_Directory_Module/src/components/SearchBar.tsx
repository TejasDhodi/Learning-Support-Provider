interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  placeholder?: string;
}

const SearchBar = ({ 
  searchQuery, 
  onSearchChange, 
  placeholder = "Search providers by name, specialization, or location..." 
}: SearchBarProps) => {
  return (
    <div className="search-container">
      <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8"/>
        <path d="m21 21-4.35-4.35"/>
      </svg>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
