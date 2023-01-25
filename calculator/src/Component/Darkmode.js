import React from 'react'
import { useState } from 'react'

const Darkmode = () => {
  const [theme, setTheme] = useState("light");
    const toggle=()=>{
        if (theme==='light') {
          setTheme('dark');
          console.log(theme);
        } else {
          setTheme('light');
        }
    }
  return (
    <div>
        <button onClick={toggle}>Toggle Theme</button>
    </div>
  )
}

export default Darkmode