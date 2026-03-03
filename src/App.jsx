import { useState } from 'react';
import ScrollToTop from "./ScrollToTop";
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageLoader from './components/PageLoader/PageLoader'; // ✅ clean import

import Home from './pages/Home/Home';
import About from './pages/About/About';
import Plans from './pages/Plans';
import NotFound from './pages/404/NotFound';

import SIMActivation from './pages/SIMActivation/ActivateYourSIM';
import Contact from './pages/Contact/Contact';
import TopUp from './pages/TopUp/TopUp';
import SwitchAndSave from './pages/SwitchAndSave/SwitchAndSave';
import Support from './pages/Support/Support';
import Faqs from './pages/FAQs/Faqs';
import Roamingandoverage from './pages/Roaming and Overage/Roamingandoverage';

import Zerocostsms from './pages/Zero Cost SMS/Zerocostsms';


function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <PageLoader onFinish={() => setLoading(false)} />}
<ScrollToTop />
      <Header />

      <Routes>
        <Route path="/"              element={<Home />} />
        <Route path="/plans"         element={<Plans />} />
        <Route path="/about-us"      element={<About />} />
        <Route path="*"              element={<NotFound />} />

        {/* Top Navbar */}
        <Route path="/activate-your-sim"         element={<SIMActivation />} />
        <Route path="/top-up"         element={<TopUp />} />
        <Route path="/switch-and-save"         element={<SwitchAndSave />} />
        <Route path="/contact"         element={<Contact />} />
        <Route path="/support"         element={<Support />} />

        {/* Footer Pages */}
        <Route path="/faqs"  element={<Faqs />} />
        <Route path="/roaming-and-overage"  element={<Roamingandoverage />} />

        <Route path="/zero-cost-sms"  element={<Zerocostsms />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;