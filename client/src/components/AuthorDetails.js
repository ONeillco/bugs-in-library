import React, { useEffect, useState, useContext } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { UserContext } from './context/user'
import BookCard from './BookCard';

const AuthorDetails = () => {
  const [ author, setAuthor ] = useState(null);
  // const [ book, setBook] = useState(null)
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();
  const { loggedIn } = useContext(UserContext)

  useEffect(async () => {
    const resp = await fetch(`/authors/${id}`)
    const data = await resp.json();
    setAuthor(data);
    setLoading(false);

  }, [])

  if(loading) {
    return <h1>Loading...</h1>
  } else {

    const deleteBook = async id => {
      const resp = await fetch(`/books/${ id }`, { method: "DELETE" })
      const data = await resp.json();
      removeBook( id );
    }
    
    const removeBook = id => {
      setAuthor({
        ...author,
        books: author.books.filter( book => book.id != id)
      })
    }
      if(loggedIn) {
    const bookCards = author.books.map((book, index) => <BookCard key={ index } book={ book } author={ author } deleteBook={ deleteBook } />)
    return (
      <div>
        <h1>{ author.name }</h1>
        <p><NavLink to={`/authors/${ author.id }/edit`}>Edit Author</NavLink></p>
        <p><NavLink to={`/authors/${ author.id }/books/new`}>Create Book</NavLink></p>
        { bookCards }
      </div>
    )
  } else {
    return (
      <h3>Access Denied - Please Signup or Login</h3>
    )
  }
  }
}


export default AuthorDetails
