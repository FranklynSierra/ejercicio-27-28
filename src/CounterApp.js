
import useCounter from "./hooks/useCounter";
const CounterApp=()=> {
 const [counter,increment,reset,decrement]=useCounter()
    return (
    <div className="App">
       <h1>Clicks: {counter}</h1>
       <button onClick={increment}>Incrementar</button>
       <button onClick={reset}>Reset</button>
       <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default CounterApp;
