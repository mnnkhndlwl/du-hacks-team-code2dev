import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Hero from './Hero/Hero';
import Home from './components/Home/Home';
import Jee from './components/Jee/Jee';
import Neet from './components/Neet/Neet';
import Engineering from './components/Engineering/Engineering';

function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen"> 
      <div className="gradient-bg-welcome">
      <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/jee' element={<Jee />} />
            <Route exact path='/neet' element={<Neet />} />
            <Route exact path='/engineering' element={<Engineering />} />
          </Routes>
      </div>
    </div>
    </Router>
      
    </>
    
  );
}

export default App;
