import {useState} from 'react';

const useCounter = () => {
    
    const [counter, setCounter] = useState(24);
 
    const increment=()=>{
        if(counter<45){
        setCounter(counter+1)
    }else{
        alert('maximo de numero establecido')
    }
    }
    const reset=()=>{
        setCounter(24)
    }
    const decrement=()=>{
        if(counter>0){
        setCounter(counter-1)
        }else{
            alert('minimo de valor establecido')
        }
    }
    return (
       counter,
       increment,
       reset,
       decrement
    );
}

export default useCounter;
