import './App.css';
import Sidebar from './components/sidebar section/Sidebar';
import Body from './components/body section/Body';

/* function App() {
  return (
    <div data-testid="test-1" className="App">
      <header className="App-header">
        <p>
          Welcome to World Space!
        </p>
      </header>
    </div>
  );
} */

function App() {
  return (
    <div data-testid="test-1">
        <Sidebar />
        <Body />
    </div>
  );
}

export default App;
