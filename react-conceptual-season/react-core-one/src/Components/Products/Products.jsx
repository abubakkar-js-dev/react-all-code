import Product from "../Product/Product"
const Products = ({person}) => {
const {name,age,gender} = person;
  return (
    <div>
        <h2>I am from Products</h2>
        <h1>{person.name}</h1>
        <Product person={person}></Product>
    </div>
  )
}

export default Products