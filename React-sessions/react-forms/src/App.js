import logo from './logo.svg';
import './App.css';

import Form from './components/Form';
import Form2 from './components/Form2';


// https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/

// https://linguinecode.com/post/why-react-setstate-usestate-does-not-update-immediately

// https://blog.logrocket.com/react-lifecycle-methods-tutorial-examples/#componentWillUnmount
// https://community.nasscom.in/communities/mobile-web-development/controlled-uncontrolled-components-react
function App() {
  console.log("hiii")
  return (
    <div className="App">

      <Form />

      <Form2 />
    </div>
  );
}

export default App;
