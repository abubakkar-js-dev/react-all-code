import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    const nameState = useInputState('Kichu nai');

    const handleSubmit = (e)=>{
        e.preventDefault();
        // console.log(name);
        console.log(nameState.value);
        console.log('Submited');
    }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input {...nameState} type="text" name="name" />
        <br />
        <label htmlFor="Email">Email:</label>
        <br />
        <input type="email" name="email" />
        <br />
        <label htmlFor="Password">Password:</label>
        <br />
        <input type="password" name="password" />
        <br />
        {/* <button>Submit</button> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
