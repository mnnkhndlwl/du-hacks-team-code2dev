import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Hero from './Hero/Hero';
import Home from './components/Home/Home';

function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen"> 
      <div className="gradient-bg-welcome">
      <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='/home' element={<Home />} />
          </Routes>
      </div>
    </div>
    </Router>
      
    </>
    
  );
}

export default App;
