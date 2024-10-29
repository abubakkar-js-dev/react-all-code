import { useEffect, useState } from 'react'
import './App.css'
import Products from './Components/Products/Products';
import Services from './Components/Services/services';

function App() {
  const [status,setStatus] = useState(false);
  const [countState, setCountState] = useState(0);
  // const handleStateCount = () =>{
  //   setCountState(countState + 1);
  // }


  const handleStatus = () => {
    setStatus(!status);
  }

  console.log(status);

  useEffect(()=>{
    setCountState(countState)
  },[countState])
  // let varCountStore = 0;
  // const handleVarCount = () =>{
  //   varCountStore += 1;
  //   console.log(varCountStore);
  // }

  const person = {
    name: 'Mr. John',
    age: 22,
    gender: 'Male',
  }

  const greetings = (mgs) => {
    setStatus(mgs);
  }


  return (
    <>
    <div>
    {/* <h2>Value of State Count: {countState}</h2> */}
    {/* <h2>Value of Varable Count: {varCountStore}</h2> */}
    </div>
    <div>
    {/* <button onClick={handleStateCount}>Update by State</button> */}
    {/* <button onClick={handleVarCount} style={{marginLeft: '16px'}}>Update by Var</button> */}

    {status ? <Products person={person} /> :  <Services sendText={greetings} /> }

    <button style={{marginLeft: '15px'}} onClick={handleStatus}>Change status</button>
    </div>
    {/* <h2>Hello React JS</h2> */}

    </>
  )
}

export default App
