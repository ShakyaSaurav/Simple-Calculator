import React from 'react'
import { useState } from 'react'

const Calculator = () => {
  const [result, setResult] = useState(0)
  
    return (
    <div className='container'>
        <form>
            <input type='text' value={result}/>
        </form>
        <div className="keypad">
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
            <button></button>
        </div>
    </div>
  )
}

export default Calculator
