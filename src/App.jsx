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
import LiveReport from './components/LiveReport';
import Victim from './components/Victim'
import WitnessForm from './components/WitnessForm';
import Edu from './components/Edu';
import EduVideo from './components/EduVideo';


const App = () => {
  return (
      <div className='bg-transparent'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Report" element={<Report/>} />
          <Route path='/LiveReport' element={<LiveReport/>}/>
          <Route path='/Victim' element={<Victim/>}/>
          <Route path='/WitnessForm' element={<WitnessForm/>}/>
          <Route path="/Education" element={<Education/>} />
          <Route path='/Edu' element={<Edu/>} ></Route>
          <Route path='/EduVideo' element={<EduVideo/>} ></Route>
          <Route path="/Counselling" element={<Counselling/>} />
          <Route path="/Statistics" element={<Statistics/>} />
          <Route path="/Help" element={<Help/>} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;
