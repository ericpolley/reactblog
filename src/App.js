import logo from './logo.svg';
import './App.css';
import Myapp1 from './Appsfolder/myapp1';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        <Myapp1 />
        </a>
        
        <h1>hello</h1>
      </header>
    </div>
  );
}

export default App;
