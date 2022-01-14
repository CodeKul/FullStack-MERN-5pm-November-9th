import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Navbar from './components/Navbar';

// npx create-react-app your-application-name
// react series by codevolution
// virtual DOM/React DOM
// Component Life Cycles
// Class Component vs Function Component
// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#componentWillUnmount

function App() {
  return (
    <div className="App">
     <h1>Welcome to REACT...!!</h1>

     <Navbar/>

     <Hello/>
    </div>
  );
}

export default App;
