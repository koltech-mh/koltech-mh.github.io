import { Navigation } from './components/Navigation.tsx';
import { Hero } from './components/Hero.tsx';
import { About } from './components/About.tsx';
import { Agenda } from './components/Agenda.tsx';
import { Partners } from './components/Partners.tsx';
import { RegistrationForm } from './components/RegistrationForm.tsx';
import { Footer } from './components/Footer.tsx';
import { Location } from './components/Location.tsx';

export default function App() {
  return (
    <div>
      <Navigation />
      
      {/* Add padding to account for fixed navigation */}
      <div>
        <Hero />
        <About />
        <Agenda />
        <Location/>
        <Partners />
        <RegistrationForm />
        <Footer />
      </div>
    </div>
  );
}