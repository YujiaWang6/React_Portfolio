import './App.css'
import Header from "./components/Header.jsx"
import Footer from "./components/footer.jsx"
import HomePage from "./pages/HomePage.jsx"
import AboutPage from "./pages/AboutPage.jsx"
import ContactPage from "./pages/ContactPage.jsx"
import ProjectPage from './pages/ProjectPage.jsx'

import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AllAboutTheUniverse from './pages/Projects/AllAboutTheUniverse.jsx';
import CMS from './pages/Projects/E-Commerce-CMS.jsx';
import BeadKeychainDesignPlatform from './pages/Projects/BeadKeychainDesignPlatform.jsx';
import GIFPhotoBooth from './pages/Projects/GIFPhotoBooth.jsx';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/project" element={<ProjectPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/project/AllAboutTheUniverse" element={<AllAboutTheUniverse/>}/>
          <Route path="/project/E-Commerce-CMS" element={<CMS/>}/>
          <Route path="/project/BeadKeychainDesignPlatform" element={<BeadKeychainDesignPlatform/>}/>
          <Route path="/project/GIFPhotoBooth" element={<GIFPhotoBooth/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
