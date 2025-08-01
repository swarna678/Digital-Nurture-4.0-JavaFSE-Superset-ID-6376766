
import './App.css';

function BookDetails({ books }) {
  return (
    <div className="card">
      <h2 className="card-title">Book Details</h2>
      {books && books.length > 0 ? (
        <ul className="list">
          {books.map((book) => (
            <li key={book.id} className="list-item">
              <h3 className="item-title">{book.bname}</h3>
              {book.price > 0 && (
                <p className="item-text">Price: ${book.price}</p>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-data-message">No book details available.</p>
      )}
    </div>
  );
}

export default BookDetails;