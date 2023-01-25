import logo from './logo.svg';
import './App.css';
import Calculator from './Component/Calculator';
import Darkmode from './Component/Darkmode';
function App() {
  let themer='';
  const getData=(para)=> {
    themer=para;
    alert(themer);
  }
  const theme="container";
  return (
    <div>
      <Calculator theme={theme}/>
      <Darkmode onClick={getData}/>
    </div>
  );
}

export default App;
