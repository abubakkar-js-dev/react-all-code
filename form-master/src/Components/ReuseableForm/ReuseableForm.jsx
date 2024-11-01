import PropTypes from "prop-types";

const ReuseableForm = ({formTypeText,submitTypeText,handleSumit,children}) => {
  return (
    <div>
      <form onSubmit={handleSumit}>
        {/* <h2>{formTypeText}</h2> */}
        <div>
            {children}
        </div>
        <label htmlFor="name">Name:</label>
        <br />
        <input  type="text" name="name" />
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
        <input defaultValue= "Submit"  type="submit" value={submitTypeText} />
      </form>
    </div>
  );
};

ReuseableForm.propTypes = {
    formTypeText: PropTypes.string.isRequired,
    submitTypeText: PropTypes.string.isRequired,
    handleSumit: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
}

export default ReuseableForm;
