import React, { useEffect, useState, useContext } from 'react';
import BookCard from './BookCard';
import { UserContext } from './context/user'

const BookList = () => {
  const [ books, setBooks ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const { loggedIn} = useContext(UserContext)

  useEffect(async () => {
    const resp = await fetch('/books')
    const data = await resp.json();
    setBooks(data);
    setLoading(false);
  }, [])
  if(loading){ return <h1>Loading...</h1>}

  const deleteBook = async id => {
    const resp = await fetch(`/books/${ id }`, { method: "DELETE" })
    const data = await resp.json();
    removeBook( id );
  }
  
  const removeBook = id => {
    setBooks(books.filter( book => book.id != id))
  }

  if(loggedIn) {
  const bookCards = books.map((book, index) => <BookCard key={ index } book={ book } author={ book.author } deleteBook={ deleteBook } />)
  return (
    <div>
      <h1>Books</h1>
      { bookCards }
    </div>
  )
} else {
  return (
    <h3>Access Denied - Please Signup or Login</h3>
  )
}
}

export default BookList

