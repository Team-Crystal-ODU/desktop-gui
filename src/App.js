import './App.css';
import Sidebar from './components/sidebar section/Sidebar';
import Body from './components/body section/Body';
//import News from './components/news section/News';

function App() {
  return (
    <div data-testid="test-1" className="container">
        {/*<Sidebar />*/}
        <Body />
    </div>
  );
}

export default App;

