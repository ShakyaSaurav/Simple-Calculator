import React from 'react'
import { useState } from 'react'
import './Calculator.css'

const Darkmode = (props) => {
  const [theme, setTheme] = useState("light");
    const toggle=()=>{
     
        if (theme==='light') {
          setTheme('dark');
        } else {
          setTheme('light');
        }
        console.log(theme);
        props.onClick(theme);
    }
  return (
    <div>
        <button onClick={()=>{
          toggle();
          
          }}>Toggle Theme</button>
    </div>
  )
}

export default Darkmode