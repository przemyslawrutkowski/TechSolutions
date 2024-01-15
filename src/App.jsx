import './App.css';
import CustomNavbar from './components/CustomNavbar';
import HomePage from './components/HomePage';
import WhyUsPage from './components/WhyUsPage';
import AboutUsPage from './components/AboutUsPage';
import ServicesPage from './components/ServicesPage';
import TestimonialsPage from './components/TestimonialsPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CustomNavbar />
      <HomePage />
      <WhyUsPage />
      <AboutUsPage />
      <ServicesPage />
      <TestimonialsPage />
      <Footer />
    </>
  )
}

export default App
