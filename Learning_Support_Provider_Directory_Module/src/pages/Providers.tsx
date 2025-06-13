import { useState, useEffect } from 'react';
import { type Provider, providerService } from '../services/providerService';
import ProviderCard from '../components/ProviderCard';
import SearchBar from '../components/SearchBar';
import LoadingSpinner from '../components/LoadingSpinner';

const Providers = () => {
  const [providers, setProviders] = useState<Provider[]>([]);
  const [filteredProviders, setFilteredProviders] = useState<Provider[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);

  useEffect(() => {
    const loadProviders = async () => {
      try {
        setLoading(true);
        const data = await providerService.getAllProviders();
        setProviders(data);
        setFilteredProviders(data);
      } catch (error) {
        console.error('Error loading providers:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProviders();
  }, []);

  useEffect(() => {
    const handleSearch = async () => {
      if (searchQuery.trim() === '') {
        setFilteredProviders(providers);
        return;
      }

      try {
        setSearchLoading(true);
        const results = await providerService.searchProviders(searchQuery);
        setFilteredProviders(results);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setSearchLoading(false);
      }
    };

    const debounceTimer = setTimeout(handleSearch, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchQuery, providers]);

  if (loading) {
    return (
      <div className="main-content">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="main-content">
      <div className="container page-container">

        <div className="hero-section">
          <h1 className="hero-title">
            Find the Right Learning Support
          </h1>
          <p className="hero-description">
            Connect with qualified specialists who can help your child overcome learning challenges and reach their full potential.
          </p>
          
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>

        <div className="results-section">
          <div className="results-header">
            <h2 className="results-title">
              {searchQuery ? 'Search Results' : 'All Providers'}
            </h2>
            <span className="results-count">
              {searchLoading ? 'Searching...' : `${filteredProviders.length} provider${filteredProviders.length !== 1 ? 's' : ''} found`}
            </span>
          </div>
        </div>

        {searchLoading ? (
          <LoadingSpinner />
        ) : filteredProviders.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-card">
              <h3 className="empty-state-title">No providers found</h3>
              <p className="empty-state-description">
                {searchQuery 
                  ? `No providers match "${searchQuery}". Try adjusting your search terms.`
                  : 'No providers available at the moment.'
                }
              </p>
            </div>
          </div>
        ) : (
          <div className="providers-grid">
            {filteredProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Providers;