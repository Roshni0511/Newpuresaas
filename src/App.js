import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import RealEstateAgentCRM from './Pages/RealEstateAgentCRM';
import ContactUs from './Pages/ContactUs';
import Termsandcondition from './Pages/Termsandcondition';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/RealEstateAgentCRM' element={<RealEstateAgentCRM/>}/>
    <Route path='/ContactUs'  element={<ContactUs/>}/>
    <Route path='/Termsandcondition' element={<Termsandcondition/>}/>
  </Routes>
  </>
  );
}

export default App;
