import { useState } from "react";

const StatefulForm = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState(null);
    const [password,setPassword] = useState(null);
    const [error,setError] = useState('');

    const handleNameChange = (e) =>{
      setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }


    const handleSubmit =  (event) =>{
      event.preventDefault();
      if(password.length < 6){
        setError('Password must be atleast 6 latter.');
      }else{
        setError('');
        console.log(name,email,password);
        console.log('Form Submited');
      }

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input onChange={handleNameChange} type="text" name="name" required/>
        <br />
        <label htmlFor="Email">Email:</label>
        <br />
        <input onChange={handleEmailChange} type="email" name="email" required/>
        <br />
        <label htmlFor="Email">Password:</label>
        <br />
        <input onChange={handlePasswordChange} type="password" name="password" required/>
        <br />
        {error ? <p>{error}</p> : ''}
        {/* <button>Submit</button> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default StatefulForm;
