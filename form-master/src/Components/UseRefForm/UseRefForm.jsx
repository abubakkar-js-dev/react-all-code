import { useEffect, useRef } from "react";

const UseFefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    useEffect(()=>{
      nameRef.current.focus();
    },[])
    

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submited",nameRef.current.value);

    const nameInput = nameRef.current.value;
    const emailInput = emailRef.current.value;
    const passwordInput = passwordRef.current.value;

    console.log(nameInput);
    console.log(emailInput);
    console.log(passwordInput);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" ref={nameRef} name="name" />
        <br />
        <label htmlFor="Email">Email:</label>
        <br />
        <input type="email" ref={emailRef} name="email" />
        <br />
        <label htmlFor="Password">Password:</label>
        <br />
        <input type="password" ref={passwordRef} name="password" />
        <br />
        {/* <button>Submit</button> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default UseFefForm;
