import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import RealEstateAgentCRM from './Pages/RealEstateAgentCRM';

function App() {
  return (
  <>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/RealEstateAgentCRM' element={<RealEstateAgentCRM/>}/>
  </Routes>
  </>
  );
}

export default App;
