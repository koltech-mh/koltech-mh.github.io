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
    'Platforma 3DEXPERIENCE',
    'Cyfrowy bliźniak i symulacja',
    'Projektowanie zespołowe',
    'Inteligentna produkcja',
    'Zarządzanie danymi'
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
            <h2 className="reg-success-title">Rejestracja zakończona sukcesem!</h2>
            <p className="reg-success-text">
              Dziękujemy za rejestrację.
              Wkrótce otrzymasz e-mail potwierdzający z dodatkowymi szczegółami.
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
            <h2 className="reg-title">Zarejestruj się na wydarzenie</h2>
            <p className="reg-subtitle">Zapewnij sobie miejsce. Liczba miejsc jest ograniczona!</p>
          </div>

          <form onSubmit={handleSubmit} className="reg-form">
            
            <div className="reg-grid">
              <div>
                <label htmlFor="firstName" className="reg-label">Imię *</label>
                <input
                  type="text"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                  className="reg-input"
                  placeholder="Jan"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="reg-label">Nazwisko *</label>
                <input
                  type="text"
                  id="lastName"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                  className="reg-input"
                  placeholder="Kowalski"
                />
              </div>
            </div>

            <div className="reg-field">
              <label htmlFor="email" className="reg-label">Adres e-mail *</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="reg-input"
                placeholder="jan.kowalski@firma.pl"
              />
            </div>

            <div className="reg-grid">
              <div>
                <label htmlFor="company" className="reg-label">Firma *</label>
                <input
                  type="text"
                  id="company"
                  required
                  value={formData.company}
                  onChange={(e) => setFormData({...formData, company: e.target.value})}
                  className="reg-input"
                  placeholder="Twoja firma"
                />
              </div>

              <div>
                <label htmlFor="jobTitle" className="reg-label">Stanowisko *</label>
                <input
                  type="text"
                  id="jobTitle"
                  required
                  value={formData.jobTitle}
                  onChange={(e) => setFormData({...formData, jobTitle: e.target.value})}
                  className="reg-input"
                  placeholder="Kierownik produktu"
                />
              </div>
            </div>

            <div className="reg-field">
              <label htmlFor="phone" className="reg-label">Numer telefonu</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="reg-input"
                placeholder="+48 123 456 789"
              />
            </div>

            <div className="reg-field">
              <label className="reg-label">Obszary zainteresowań</label>
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
              Zarejestruj się
            </button>

            <p className="reg-required-note">* Pola obowiązkowe</p>
          </form>

        </div>
      </div>
    </section>
  );
}
