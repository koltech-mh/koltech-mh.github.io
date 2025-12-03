import { Navigation } from './components/Navigation.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Agenda } from './components/Agenda.tsx';
import { Partners } from './components/Partners.tsx';
import { RegistrationForm } from './components/RegistrationForm.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Add padding to account for fixed navigation */}
      <div className="pt-16">
        <Hero />
        <About />
        <Agenda />
        <Partners />
        <RegistrationForm />
        <Footer />
      </div>
    </div>
  );
}