import logo from './logo.svg';
import './App.css';
import ClassCounter from './components/ClassCounter';
import FunctionCounter from './components/FunctionCounter';
import HelloMessage from './components/HelloMessage';


// what is the diff between not defined and undefined

// https://www.freecodecamp.org/news/build-youtube-with-react/
function App() {
  return (
    <div className="App">
     {/* <ClassCounter/>

     <FunctionCounter/> */}

     <HelloMessage name={"Sanket"}/>

     <HelloMessage name={"Kiran"}/>

     <HelloMessage name={"Mayur"}/>
    </div>
  );
}

export default App;
