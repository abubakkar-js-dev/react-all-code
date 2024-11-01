const SimpleForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault()
    const name_ = event.target.name.value;
    const email = event.target.email.value;
    const phoneNumber = event.target.phone.value;
    
    console.log(name_);
    console.log(email);
    console.log(phoneNumber);

    console.log("Form Submited!");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <br />
        <input type="text" name="name"/>
        <br />
        <label htmlFor="Email">email:</label>
        <br />
        <input type="email" name="email" />
        <br />
        <label htmlFor="Email">email:</label>
        <br />
        <input type="phone" name="phone"/>
        <br />
        {/* <button>Submit</button> */}
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default SimpleForm;
