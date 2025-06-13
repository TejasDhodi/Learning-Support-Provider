import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { providerService, type Provider } from '../services/providerService';
import LoadingSpinner from '../components/LoadingSpinner';

const ProviderDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [provider, setProvider] = useState<Provider | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const loadProvider = async () => {
      if (!id) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const data = await providerService.getProviderById(id);
        if (data) {
          setProvider(data);
        } else {
          setNotFound(true);
        }
      } catch (error) {
        console.error('Error loading provider:', error);
        setNotFound(true);
      } finally {
        setLoading(false);
      }
    };

    loadProvider();
  }, [id]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`star ${index < Math.floor(rating) ? 'star-filled' : 'star-empty'}`}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
      </svg>
    ));
  };

  if (loading) {
    return (
      <div className="provider-detail">
        <LoadingSpinner />
      </div>
    );
  }

  if (notFound || !provider) {
    return (
      <div className="provider-detail">
        <div className="container page-container">
          <div className="empty-state">
            <div className="empty-state-card">
              <h2 className="empty-state-title">Provider Not Found</h2>
              <p className="empty-state-description">
                The provider you're looking for doesn't exist or may have been removed.
              </p>
              <Link to="/" className="btn" style={{ marginTop: '1rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m12 19-7-7 7-7"/>
                  <path d="M19 12H5"/>
                </svg>
                Back to Providers
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="provider-detail">
      <div className="container page-container">

        <div className="back-button">
          <Link to="/" className="btn btn-outline">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m12 19-7-7 7-7"/>
              <path d="M19 12H5"/>
            </svg>
            Back to Providers
          </Link>
        </div>

        <div className="provider-header">
          <div>
            <h1 className="provider-detail-title">
              {provider.name}
            </h1>
            
            <div className="provider-detail-meta">
              <div className="provider-specialization">
                {provider.specialization}
              </div>
              <div className="provider-rating">
                {renderStars(provider.rating)}
                <span className="rating-text">{provider.rating}</span>
              </div>
            </div>
            
            <p className="provider-detail-description">
              {provider.shortDescription}
            </p>
          </div>
        </div>

        <div className="detail-grid">

        <div className="detail-section">
            <h2 className="section-title">About</h2>
            <div className="section-content">
            {provider.longDescription}
            </div>
        </div>

          <div>
            <div className="detail-section">
              <h3 className="section-title">Contact Information</h3>
              <div className="contact-list">
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{provider.location}</span>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  <a 
                    href={`tel:${provider.phoneNumber}`}
                    className="contact-link"
                  >
                    {provider.phoneNumber}
                  </a>
                </div>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a 
                    href={`mailto:${provider.contactEmail}`}
                    className="contact-link"
                  >
                    {provider.contactEmail}
                  </a>
                </div>
              </div>
            </div>

            <div className="detail-section">
              <h3 className="section-title">Experience</h3>
              <div className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4f46e5" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                <span>{provider.experience}</span>
              </div>
            </div>

            <div className="cta-card">
              <h3 className="cta-title">Ready to get started?</h3>
              <p className="cta-description">Contact {provider.name} today</p>
              <a href={`mailto:${provider.contactEmail}`} className="btn btn-secondary">
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProviderDetail;