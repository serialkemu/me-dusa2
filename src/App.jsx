import { Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home'
import Report from './pages/Report';
import Education from './pages/Education';
import Counselling from './pages/Counselling';
import Statistics from './pages/Statistics';
import Help from './pages/Help';

const App = () => {
  return (
      <div className='bg-primary'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Report" element={<Report/>} />
          <Route path="/Education" element={<Education/>} />
          <Route path="/Counselling" element={<Counselling/>} />
          <Route path="/Statistics" element={<Statistics/>} />
          <Route path="/Help" element={<Help/>} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;
