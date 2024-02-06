import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './BookList.css'; 
const BookList = ({ searchTerm }) => {
  const [filteredBooks, setFilteredBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://reactnd-books-api.udacity.com/books', {
          headers: {
            'Authorization': 'whatever-you-want',
          },
        });
        setFilteredBooks(response.data.books);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredBooks(filteredBooks);
    } else {
      const filtered = filteredBooks.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredBooks(filtered);
    }
  }, [filteredBooks, searchTerm]);

  return (
    <div><h1>Book List</h1>
      
    <div className="book-list">
      
      <div className="horizontal-scroll">
        {filteredBooks.map(book => (
          <div className="book-item" key={book.id}>
            <img src={book.imageLinks.thumbnail} alt={book.title} />
            <div className="book-info">
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors.join(', ')}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default BookList;
