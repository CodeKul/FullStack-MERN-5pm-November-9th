import logo from './logo.svg';
import './App.css';

import UseRefExample from './component/useref/UseRefExample';
import User from './component/usestate/User';
import UseEffectExample from './component/useeffect/UseEffectExample';
import Message from './component/Message';

function App() {

  let fname = "Codekul"
  return (
    <div className="App">
     {/* <User/>

     <UseRefExample/> */}

     {/* <Message name={fname}/> */}

     <UseEffectExample/>
     </div>
  );
}

export default App;
