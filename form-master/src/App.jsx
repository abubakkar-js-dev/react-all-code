
import './App.css'
// import HookForm from './Components/HookForm/HookForm'
import ReuseableForm from './Components/ReuseableForm/ReuseableForm'
// import UseRefForm from './Components/UseRefForm/UseRefForm'
// import StatefulForm from './Components/StatefulForm/StatefulForm'
// import SimpleForm from './Components/SimpleForm/SimpleForm'

function App() {

  const handleSubmit = (e)=>{
    e.preventDefault();
  }


  return (
    <>
    {/* <SimpleForm /> */}
    {/* <StatefulForm /> */}
    {/* <UseRefForm /> */}
    {/* <HookForm /> */}
    <ReuseableForm formTypeText='Log in' submitTypeText='Login' handleSumit={handleSubmit}>
      <h2>Log  in</h2>
      <p>Login here Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quae.</p>
    </ReuseableForm>
    <ReuseableForm formTypeText='Update Profile' submitTypeText='Update' handleSumit={handleSubmit}>
      <h2>Update Profile</h2>
      <p>Stay update always Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, corrupti.</p>
    </ReuseableForm>
    </>
  )
}

export default App
