import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import "./RegistrationForm.css";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    jobTitle: '',
    phone: '',
    interests: [] as string[]
  });

  const [submitted, setSubmitted] = useState(false);

  const interestOptions = [
    '3DEXPERIENCE Platform',
    'Digital Twin & Simulation',
    'Collaborative Design',
    'Smart Manufacturing',
    'Data Management'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        jobTitle: '',
        phone: '',
        interests: []
      });
    }, 3000);
  };

  const handleInterestChange = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  if (submitted) {
    return (
      <section className="reg-section" id="registration">
        <div className="reg-container">
          <div className="reg-success-card">
            <CheckCircle className="reg-success-icon" />
            <h2 className="reg-success-title">Registration Successful!</h2>
            <p className="reg-success-text">
              Thank you for registering for the PLM Innovation Summit 2025. 
              You will receive a confirmation email shortly with additional details.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="reg-section" id="registration">
      <div className="reg-container">
        <div className="reg-wrapper">

          <div className="reg-header">
            <h2 className="reg-title">Register for the Event</h2>
            <p className="reg-subtitle">Secure your spot at the PLM Innovation Summit 2025. Limited seats available!</p>
          </div>

          <form onSubmit={handleSubmit} className="reg-form">
            
            <div className="reg-grid">
              <div>
                <label htmlFor="firstName" className="reg-label">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="reg-input"
                  placeholder="John"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="reg-label">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="reg-input"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="reg-field">
              <label htmlFor="email" className="reg-label">Email Address *</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="reg-input"
                placeholder="john.doe@company.com"
              />
            </div>

            <div className="reg-grid">
              <div>
                <label htmlFor="company" className="reg-label">Company *</label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="reg-input"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="reg-label">Job Title *</label>
                <input
                  type="text"
                  id="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                  className="reg-input"
                  placeholder="Product Manager"
                />
              </div>
            </div>

            <div className="reg-field">
              <label htmlFor="phone" className="reg-label">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="reg-input"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            <div className="reg-field">
              <label className="reg-label">Topics of Interest</label>
              <div className="reg-interest-list">
                {interestOptions.map((interest) => (
                  <label key={interest} className="reg-interest-item">
                    <input
                      type="checkbox"
                      checked={formData.interests.includes(interest)}
                      onChange={() => handleInterestChange(interest)}
                      className="reg-checkbox"
                    />
                    <span>{interest}</span>
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="reg-button">
              <Send className="reg-button-icon" />
              Complete Registration
            </button>

            <p className="reg-required-note">* Required fields</p>
          </form>

        </div>
      </div>
    </section>
  );
}
