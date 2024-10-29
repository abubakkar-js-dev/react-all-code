
const Product = ({person}) => {
  const {name,age,gender} = person;
  return (
    <div>
        <h3>This is from product child!</h3>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Gender: {gender}</p>
    </div>
  )
}

export default Product