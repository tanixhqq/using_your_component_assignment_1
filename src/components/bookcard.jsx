// write the book component code here

// write the book component code here
import PropTypes from 'prop-types';
import './BookCard.css';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.image} alt={book.name} className="book-image" />
      <h2 className="book-title">{book.name}</h2>
      <p className="book-genre"><strong>Genre:</strong> {book.genre}</p>
      <p className="book-author"><strong>Author:</strong> {book.author}</p>
    </div>
  );
}

// Define prop types
BookCard.propTypes = {
  book: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookCard;
