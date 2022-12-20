
import './App.css';
import './responsive.css';
import Home from './components/Home';
import CreateGiveaway from './components/CreateGiveaway';
import PastWinners from './components/PastWinners';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/dashboard';

import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter
} from "react-router-dom"
import About from './components/About';
import Contact from './components/Contact';
import GetRich1 from './components/GetRich1';
import Leaderboard from './components/Leaderboard';
import Questions from './components/Questions';
import QuickCash from './components/QuickCash';
import QuickCash2 from './components/QuickCash2';
import QuickCash3 from './components/QuickCash3';
import QuickCash4 from './components/QuickCash4';
import QuickCash5 from './components/QuickCash5';
import QuickCash6 from './components/QuickCash6';

function App() {
  return (
    <>

<HashRouter >
    <Routes>
    {/* (localStorage.getItem("IsLoggedin")) ? <Dashboard /> : */}

<Route path="/" element={ <Home />}/>
<Route path="/creategiveaway" element={<CreateGiveaway />}/>
<Route path="/about" element={<About />}/>
<Route path="/register" element={<Register />}/>
<Route path="/login" element={<Login />}/>
<Route path="/Pastwinners" element={<PastWinners />}/>
<Route path="/dashboard" element={ <Dashboard />}/>
<Route path="/contact" element={ <Contact />}/>
<Route path="/getrich1" element={ <GetRich1 />}/>
<Route path="/leaderboard" element={ <Leaderboard />}/>
<Route path="/questions" element={ <Questions />}/>
<Route path="/quickcash" element={ <QuickCash />}/>
<Route path="/quickcash2" element={ <QuickCash2 />}/>
<Route path="/quickcash3" element={ <QuickCash3 />}/>
<Route path="/quickcash4" element={ <QuickCash4 />}/>
<Route path="/quickcash5" element={ <QuickCash5 />}/>
<Route path="/quickcash6" element={ <QuickCash6 />}/>

    </Routes>
   </HashRouter >
    </>
    
  );
}

export default App;
