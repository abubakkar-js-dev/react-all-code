import Books from "./Book"
const BookStore = ({books}) => {
    console.log(books)
  return (
    <div>
        <h3>Books: {books.length}</h3>
        {books.map((book,index) =>  <Books book={book} />)}
    </div>
  )
}

export default BookStore
