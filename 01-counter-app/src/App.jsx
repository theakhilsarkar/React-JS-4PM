// useState -> react
import { useState } from "react";

const App = ()=>{
  const [count,setCount] = useState(10);
  return <div className="vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
    <h1>{count}</h1>
    <button onClick={()=>{
      setCount(count+1)
    }} className="btn btn-primary m-4">++</button>
    <button onClick={()=>{
      setCount(count-1)
    }} className="btn btn-primary m-4">--</button>

    <button onClick={()=>{
      setCount(count*2)
    }} className="btn btn-primary m-4">**</button>
  </div>
}

export default App;

