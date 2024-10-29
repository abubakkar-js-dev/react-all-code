
import { useState } from 'react'
import './App.css'
import Watch from './Components/Watch/Watch'
import { useEffect } from 'react';


function App() {
  // const watches = [
  //   {id: 1, name: 'Apple Watch',price: 200},
  //   {id: 2, name: 'Samsung Watch',price: 200},
  //   {id: 3, name: 'MI Watch',price: 200},
  // ]

  // const watches = [
  //   {
  //     id: 1,
  //     name: "Rolex Submariner",
  //     price: 8500
  //   },
  //   {
  //     id: 2,
  //     name: "Omega Speedmaster",
  //     price: 5200
  //   },
  //   {
  //     id: 3,
  //     name: "Tag Heuer Carrera",
  //     price: 3000
  //   },
  //   {
  //     id: 4,
  //     name: "Seiko Prospex",
  //     price: 700
  //   },
  //   {
  //     id: 5,
  //     name: "Casio G-Shock",
  //     price: 150
  //   }
  // ];
  
  const [watches,setWatches] = useState([]);
  useEffect(()=>{
    fetch('watches.json')
    .then(res => res.json())
    .then(data => setWatches(data));
  },[])


  return (
    <>
      <h1>Vite + React</h1>
      {
        watches.map((watch) => <Watch key={watch.id} watch={watch}></Watch>)
      }
    </>
  )
}

export default App
