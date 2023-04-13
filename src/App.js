import {Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import MainGallery from './pages/MainGallery';
import Works from './pages/Works';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';

function App() {
  return(
    <Layout>
      <Routes>
        <Route path='/' element={<MainGallery/>} />
        <Route path='/works' element={<Works/>} />
        <Route path='/about-me' element={<AboutMe/>} />
        <Route path='/contacts' element={<Contacts/>} />
      </Routes>
    </Layout>
    
  );
}

export default App;
