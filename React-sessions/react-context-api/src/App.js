import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Dashboard from './components/Dashboard';
import UserProvider from './components/UserContext';
import Main from './components/Main';


// https://blog.logrocket.com/react-context-api-deep-dive-examples/
// https://www.youtube.com/watch?v=CI7EYWmRDJE
// https://www.youtube.com/watch?v=tEqNSOhCHLU
// https://www.youtube.com/watch?v=UjjtvroahBU
function App() {


  return (
    <div className="App">
     {/* <Dashboard data={userinfo}/> */}

     <UserProvider>
<Dashboard/>
<Main/>
     </UserProvider>
    </div>
  );
}

export default App;
