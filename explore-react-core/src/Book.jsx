import './Book.css'
export default function Books({book}){
    console.log(book);
    return (
        <div className='book'>
            <h3>Book Name: {book.name}</h3>
            <p>Book Price: {book.price}</p>
        </div>
    )
}