import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="provider-detail">
      <div className="container page-container">
        <div className="empty-state">
          <div className="empty-state-card">
            <h1 className="hero-title" style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
            <p className="empty-state-title" style={{ marginBottom: '1rem' }}>Oops! Page not found</p>
            <a href="/" className="btn">
              Return to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
