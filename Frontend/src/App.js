import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';
import Hero from './Hero/Hero';

function App() {
  return (
    <>
    <Router>
      <div className="min-h-screen"> 
      <div className="gradient-bg-welcome">
      <Routes>
            <Route path='/' element={<Hero />} />
          </Routes>
      </div>
    </div>
    </Router>
      
    </>
    
  );
}

export default App;
