import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SecurityView from './components/SecurityView';
import AnalystView from './components/AnalystView';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<SecurityView/>} />
        <Route path='/analytics' element={< AnalystView/>} /> 
      </Routes>
    </Router>
    </>
  );
}

export default App;
