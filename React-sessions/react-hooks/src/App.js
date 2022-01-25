import logo from './logo.svg';
import './App.css';

import UseRefExample from './component/useref/UseRefExample';
import User from './component/usestate/User';
import UseEffectExample from './component/useeffect/UseEffectExample';

function App() {
  return (
    <div className="App">
     {/* <User/>

     <UseRefExample/> */}

     <UseEffectExample/>
     </div>
  );
}

export default App;
