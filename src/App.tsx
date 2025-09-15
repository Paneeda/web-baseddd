import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/main'
import Theme from './theme/main'
import Home from './pages/Home/main';
import AboutUs from './pages/About_Us/main';
import News from './pages/News/main';
import ProductMain from './pages/Product/main';
import Forms from './pages/Forms/main';
import Career from './pages/Career/main';
import Footer from './components/Footer/main';
import Contactus from './pages/contactUs/main';



function App() {

  return (
    <Router>
      <div className="flex flex-col min-h-screen w-full font-bic">
        {/* Header */}
        <div className='sticky top-0 z-50 bg-white shadow'>
          <Header />
        </div>

    
    


        {/* Main Content */}
        <main className="flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/theme" element={<Theme />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/news" element={<News/>} />
            <Route path='/productnservice' element={<ProductMain/>} />
            <Route path='/forms' element={<Forms/>} />
            <Route path='/career' element={<Career/>} />
            <Route path='/contactus' element={<Contactus/>} />
        
          </Routes>
        </main>

        {/* Footer */}
    <div className="pt-30">
      <Footer/>
    </div>


      </div>
    </Router>
  );
}

export default App