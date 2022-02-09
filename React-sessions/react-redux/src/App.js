import logo from './logo.svg';
import './App.css';
import Bank from './components/Bank';


// Types of Redux -
// 1. Core Redux 
// 2. React-Redux 
// 3. Redux-Toolkit 
// 4. Redux-Thunk 
// 5. Redux-Saga

// how to connect component to store ?

function App() {
  return (
    <div className="App">
     <Bank/>
    </div>
  );
}

export default App;
