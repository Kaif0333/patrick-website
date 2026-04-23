import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import FinancialNavigation from './pages/FinancialNavigation';
import FinancialTransformation from './pages/FinancialTransformation';
import LifeScienceAdvisory from './pages/LifeScienceAdvisory';
import Training from './pages/Training';
import TrainingFundamentals from './pages/TrainingFundamentals';
import TrainingRising from './pages/TrainingRising';
import TrainingPatientsProfitability from './pages/TrainingPatientsProfitability';
import ServicePatientsProfitability from './pages/ServicePatientsProfitability';
import EbookLanding from './pages/EbookLanding';
import EbookThankYou from './pages/EbookThankYou';
import ConsultationSuccess from './pages/ConsultationSuccess';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/financial-navigation" element={<FinancialNavigation />} />
          <Route path="/services/financial-transformation" element={<FinancialTransformation />} />
          <Route path="/services/life-science-advisory" element={<LifeScienceAdvisory />} />
          <Route path="/training" element={<Training />} />
          <Route path="/training/fundamentals" element={<TrainingFundamentals />} />
          <Route path="/training/patients-profitability" element={<TrainingPatientsProfitability />} />
          <Route path="/services/patients-profitability" element={<ServicePatientsProfitability />} />
          <Route path="/training/rising" element={<TrainingRising />} />
          <Route path="/ebook" element={<EbookLanding />} />
          <Route path="/ebook/thank-you" element={<EbookThankYou />} />
          <Route path="/consultation/success" element={<ConsultationSuccess />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;