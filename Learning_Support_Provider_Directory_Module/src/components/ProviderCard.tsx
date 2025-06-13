import React from 'react';
import { Star, MapPin, Mail, Phone } from 'lucide-react';
import type { Provider } from '../services/providerService';
import { Link } from 'react-router-dom';

interface ProviderCardProps {
  provider: Provider;
}

const ProviderCard = ({ provider }: ProviderCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`star ${
          index < Math.floor(rating) 
            ? 'star-filled' 
            : 'star-empty'
        }`}
      />
    ));
  };

  return (
    <Link 
      to={`/providers/${provider.id}`}
      className="provider-card"
    >
      <div className="provider-card-header">
        <h3 className="provider-name">
          {provider.name}
        </h3>
        <div className="provider-specialization">
          {provider.specialization}
        </div>
        <div className="provider-rating">
          {renderStars(provider.rating)}
          <span className="rating-text">{provider.rating}</span>
        </div>
      </div>
      
      <p className="provider-description">
        {provider.shortDescription}
      </p>
      
      <div className="provider-meta">
        <div className="meta-item">
          <MapPin className="meta-icon" />
          <span>{provider.location}</span>
        </div>
        <div className="meta-item">
          <Mail className="meta-icon" />
          <span>{provider.contactEmail}</span>
        </div>
        <div className="meta-item">
          <Phone className="meta-icon" />
          <span>{provider.phoneNumber}</span>
        </div>
      </div>
      
      <div className="provider-footer">
        <span className="experience-text">
          {provider.experience} experience
        </span>
      </div>
    </Link>
  );
};

export default ProviderCard;