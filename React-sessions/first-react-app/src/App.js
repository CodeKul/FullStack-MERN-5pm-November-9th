import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Navbar from './components/Navbar';
//import ClassComponent from './components/ClassComponent';
 import { ClassComponent } from './components/ClassComponent';
import ClassCounter from './components/ClassCounter';
 

// npx create-react-app your-application-name
// react series by codevolution
// virtual DOM/React DOM
// Component Life Cycles
// Class Component vs Function Component
// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#componentWillUnmount
// https://www.youtube.com/watch?v=qnN_FuFNq2g
// https://www.youtube.com/watch?v=KDXZibVdiEI

function App() {
  // console.log(ClassComponent.data)
  return (
    <div className="App">
     <h1>Welcome to REACT...!!</h1>

     {/* <Navbar/>

     <Hello/> */}

     {/* <ClassComponent/> */}

     <ClassCounter/>
    </div>
  );
}

export default App;
