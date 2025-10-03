import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header/main'
import Theme from './theme/main'
import Home from './pages/Home/main';
import AboutUs from './pages/AboutUs/main';
import News from './pages/News/main';
import ProductMain from './pages/Product/main';
import Forms from './pages/Forms/main';
import Career from './pages/Career/main';
import Footer from './components/Footer/main';
import Contactus from './pages/contactUs/main';
import Loans from './pages/Product/loans';
import Deposit from './pages/Product/deposit';
import Atm from './pages/Product/atm';
import FeeandCharge from './pages/Product/feencharge';
import Ibanking from './pages/Product/electronic-banking/ibanking';
import BicCare from './pages/Product/electronic-banking/biccare';
import ServiceUnits from './components/seviceunits/main';
import ExchangeRate from './components/Rate/exchangerate';
import Senior from './pages/deposit/senior';




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
            <Route path="/news" element={<News />} />
            <Route path='/productnservice' element={<ProductMain />} />
            <Route path='/forms' element={<Forms />} />
            <Route path='/career' element={<Career />} />
            <Route path='/contactus' element={<Contactus />} />
            <Route path='/loan' element={<Loans />} />
            <Route path='/deposit' element={<Deposit />} />
            <Route path='/atm' element={<Atm />} />
            <Route path='/feencharge' element={<FeeandCharge />} />
            <Route path='/ibanking' element={<Ibanking />} />
            <Route path='/bic-care' element={<BicCare />} />
            <Route path='serviceunit' element={<ServiceUnits />} />

          </Routes>
        </main>

        <div className='mt-10'>
          <Routes>
            <Route path='/exchangerate' element={<ExchangeRate />} />



            <Route path='/senior' element={<Senior/>} />

          
          </Routes>
        </div>

        <div>
        <Routes>

          <Route path=''/>

        

        </Routes>
        
        </div>
        





        {/* Footer */}
        <div className="t-30">
          <Footer />
        </div>


      </div>
    </Router>
  );
}

export default App