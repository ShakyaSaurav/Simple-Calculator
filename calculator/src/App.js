import logo from './logo.svg';
import './App.css';
import Calculator from './Component/Calculator';
import Darkmode from './Component/Darkmode';
function App() {
  let theme='';
  const getData=(para)=> {
    theme=para;
  }
  return (
    <div>
      <Calculator themer={theme}/>
      <Darkmode onClick={getData}/>
    </div>
  );
}

export default App;
