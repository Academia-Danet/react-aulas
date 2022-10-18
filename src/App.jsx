import { useState, useEffect } from "react";
import { Contador } from "./Contador";

function App() {
  const [counter, setCounter] = useState(0)
  const [calc, setCalc ] = useState(0)
  

  useEffect(function(){
      setCalc( counter * 2)
  }, [counter])

  
  return (
    <>
    <p>Contador: {counter}</p>
    <button onClick={()=> setCounter((counter)=>counter + 1)}>add 1</button>
     <p>Calc por 2 : {calc}</p>
    </>
  );
}

export default App;
