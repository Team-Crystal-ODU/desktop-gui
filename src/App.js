import './App.css';
import Body from './components/body section/Body';
import Login from './components/login section/Login';
import Register from "./components/login section/Register";

import { Routes, Route } from 'react-router-dom';
import RSS from './components/body section/rssFeed section/rss/src/App';


function App() {
  return (
    <div data-testid="test-1" className="container">
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<Body />} />
        <Route path='/news' element={<RSS />} />
      </Routes>
    </div>
  );
}

export default App;

