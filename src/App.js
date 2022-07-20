
import useCounter from "./hooks/useCounter";
const App=()=> {
 const [counter,increment,reset,decrement]=useCounter()
    return (
    <div >
       <h1>Clicks: {counter}</h1>
       <button onClick={increment}>Incrementar</button>
       <button onClick={reset}>Reset</button>
       <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
