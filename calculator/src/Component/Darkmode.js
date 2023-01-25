import React from 'react'

const Darkmode = () => {
    const toggle=()=>{
        alert('hi')
    }
  return (
    <div>
        <button onClick={toggle}>Toggle Dark-mode</button>
    </div>
  )
}

export default Darkmode