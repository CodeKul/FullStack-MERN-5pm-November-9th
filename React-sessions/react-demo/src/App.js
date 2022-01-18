import logo from './logo.svg';
import './App.css';
import HelloMessage from './components/HelloMessage';
import HelloClass from './components/HelloClass';


// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#componentWillUnmount

function App() {
  console.log("hiii")
  return (
    <div className="App">
      {/* <header className="App-header">
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
          Learn React
        </a>
      </header> */}
<HelloClass/>
      <HelloMessage/>
    </div>
  );
}

export default App;
