
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Contactus from './Components/Contactus';
import ComingSoon from './Components/ComingSoon';
import AboutPage from './Components/AboutPage';
import ShriShraddhanathji from './Components/ShriShraddhanathji';
import TrustPage from './Components/TrustPage';
import SanskritVidyapeeth from './Components/SanskritVidyapeeth';
import MtAbuAshram from './Components/MtAbuAshram';
import NathSect from './Components/NathSect';
import CurrentPeethadheeswar from './Components/CurrentPeethadheeswar';

function App() {

  return (
    <Routes>

      <Route exact path="/" element={<LandingPage />}/>
      <Route exact path="/contact_us" element={<Contactus />} />
      <Route exact path="/about_us" element={<AboutPage />} />
      <Route exact path="/shri_shraddhanathji" element={<ShriShraddhanathji />} />
      <Route exact path="/sanskrit_vidyapeeth" element={<SanskritVidyapeeth />} />
      <Route exact path="/nath_sect" element={<NathSect />} />
      <Route exact path="/current_peethadheeswar" element={<CurrentPeethadheeswar />} />
      <Route exact path="/mount_abu_ashram" element={<MtAbuAshram />} />
      <Route exact path="/trust" element={<TrustPage />} />
      <Route path="/*" element={<ComingSoon />} />
     
    </Routes>
  );
}

export default App;


