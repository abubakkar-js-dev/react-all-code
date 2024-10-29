import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './todo'
import Actor from './Actor'
import Singer from './Singer';
import BookStore from './BookStore'

function App() {
  const [count, setCount] = useState(0)
  const actors = ['Sakib Khan','Soreful Raj','Manna ','Dipjol','Pori Moni'];
  
  const singers = [
    {name: 'Dr. Mahfuzur Rahman',age: 68},
    {name: 'Eva Rahman',age: 38},
    {name: 'Shuvro Rahman',age: 25},
    {name: 'Momotaz',age: 45},
  ]
  const books = [
    {id:1, name: 'Physics', price: 100},
    {id:1, name: 'Math', price: 130},
    {id:1, name: 'Biology', price: 170},
    {id:1, name: 'Chemistry', price: 110},
  ]

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <BookStore books={books}></BookStore>
      {/* <Devices name='Laptop' price=''></Devices>
      <Devices name='Phone'></Devices>
      <Devices name='Speaker'></Devices>
      <Devices name='wife'></Devices>
     <Person></Person>
     <Teacher></Teacher>
      <Developer title ='Front End Engineer' salary ='32000' language ='Javascript'></Developer> */}
      {/* <Todo 
      task = 'Learn React' 
      isDone = {true}>
      </Todo>
      <Todo
      task = 'React Core Concept'
      isDone={false}>
      </Todo>
      <Todo
      task = 'Learn JSX' 
      isDone={true}>
      </Todo> */}

        {singers.map((singer,index) =>{
          return <Singer singer ={singer}key={index}></Singer>
        })}

      {actors.map((actor,index) =>{
        return <Actor key={index} name={actor}></Actor>
      })}
    </>
    
  )
}

function Person(){
  const person = {name: 'Mr. Abu Bakkar', age: 22};
  return <h3>My name is {person.name} and I am  {person.age} year old.</h3>
}
function  Teacher(){
  const teacher = {name: 'Moksed Mia', age: 23,department: 'English'};
  return (
    <div className='teacher'>
          <h3>I am teaching in a Univercity. Here is my details information</h3>
          <p>Name: {teacher.name}</p>
          <p>Age: {teacher.age}</p>
          <p>Department: {teacher.department}</p>
    </div>
  )
}

function Developer({title ='Web Developer',salary,language}){
  const developerStyle = {
    margin: '20px',
    padding: '20px',
    border: '2px solid purple',
    borderRadius: '8px',
  }
  // const {title,salary,language} = props;
  return (
    <div style={developerStyle}>
      <h5>Special Developer</h5>
      <h4>Title: {title}</h4>
      <p>Salary: {salary}</p>
      <p>Coding with {language}</p>
    </div>
  )
}

function Devices(props){
    return (
      <h2>This device is: {props.name}</h2>
    )
}

export default App
