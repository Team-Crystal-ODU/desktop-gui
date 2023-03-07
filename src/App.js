import './App.css';
import Body from './components/body section/Body';
import News from './components/news section/News';
import Login from './components/login section/Login';
import Register from "./components/login section/Register";

import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div data-testid="test-1" className="container">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Body />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </div>
  );
}

export default App;

