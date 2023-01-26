import logo from './logo.svg';
import './App.css';
import Calculator from './Component/Calculator';
import Darkmode from './Component/Darkmode';
import { useState } from 'react';
function App() {
  const [Theme, setTheme] = useState('')
  const getData=(para)=> {
    setTheme(para)
  }
  return (
    <div>
      <Darkmode onClick={getData}/>
      <Calculator themer={Theme}/>
    </div>
  );
}

export default App;
