import { Routes, Route } from 'react-router-dom';
import Home from './views/home';
import AboutUs from './views/about_us';
import Services from './views/services';
import Contacts from './views/contacts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about_us" element={<AboutUs />} />
      <Route path="services" element={<Services />} />
      <Route path="contacts" element={<Contacts />} />
    </Routes>
  );
}

export default App;
