import {useState} from 'react'
export const useCounter = (initialValue)=>{
    const [counter, setCounter] = useState(initialValue = 1);
   
    const increment = (value = 1)=> {
        setCounter(counter + value)
    }
    const reset = () => {
        setCounter(initialValue)
    }
    const decrement = (value = 1)=> {
        
        if(counter > 0 )
        setCounter(counter - value)
    }
    return {
        counter,
        increment,
        reset,
        decrement
    }
} 