import { Link } from 'react-router-dom';
import { Search, Users, Star, ArrowRight, GraduationCap, Heart, CheckCircle, BookOpen } from 'lucide-react';

const Index = () => {
  return (
    <div className="landing-page">

      <section className="hero-landing">
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-landing-title">
                Find the Perfect Learning Support for Your Child
              </h1>
              <p className="hero-landing-description">
                Connect with qualified learning support specialists who understand your child's unique needs and can help them thrive academically and personally.
              </p>
              <div className="hero-actions">
                <Link to="/providers" className="btn btn-primary">
                  <Search className="w-5 h-5" />
                  Find Providers
                </Link>
                <Link to="/providers" className="btn btn-outline">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="hero-image">
              <div className="hero-card">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop" 
                  alt="Learning support specialist working with a child"
                  className="hero-img"
                />
                <div className="hero-badge">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span>Trusted by 1000+ families</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Why Choose Habot Connect?</h2>
            <p className="section-description">
              We make finding the right learning support simple, safe, and effective
            </p>
          </div>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="feature-title">Verified Specialists</h3>
              <p className="feature-description">
                All our learning support providers are thoroughly vetted and qualified professionals
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Star className="w-8 h-8" />
              </div>
              <h3 className="feature-title">Quality Ratings</h3>
              <p className="feature-description">
                Real reviews and ratings from families who have worked with our providers
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="feature-title">Specialized Expertise</h3>
              <p className="feature-description">
                Find specialists for specific learning differences like dyslexia, ADHD, and autism
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="feature-title">Personalized Care</h3>
              <p className="feature-description">
                Each provider offers tailored approaches to meet your child's unique needs
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <div className="container">
          <div className="benefits-content">
            <div className="benefits-text">
              <h2 className="benefits-title">
                Empowering Every Child to Succeed
              </h2>
              <p className="benefits-description">
                Our platform connects families with experienced learning support professionals who are passionate about helping children overcome challenges and reach their full potential.
              </p>
              
              <div className="benefits-list">
                <div className="benefit-item">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Comprehensive assessments and personalized learning plans</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Evidence-based interventions and teaching methods</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Regular progress monitoring and family communication</span>
                </div>
                <div className="benefit-item">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Flexible scheduling to fit your family's needs</span>
                </div>
              </div>
              
              <Link to="/providers" className="btn btn-primary">
                <BookOpen className="w-5 h-5" />
                Start Your Search
              </Link>
            </div>
            
            <div className="benefits-image">
              <img 
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop" 
                alt="Parent and child learning together"
                className="benefits-img"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Ready to Help Your Child Thrive?</h2>
            <p className="cta-description">
              Join thousands of families who have found the perfect learning support through Habot Connect
            </p>
            <Link to="/providers" className="btn btn-primary btn-large">
              <Search className="w-6 h-6" />
              Find Your Provider Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Index;