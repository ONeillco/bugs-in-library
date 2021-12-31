import React, { useEffect, useState, useContext } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { UserContext } from './context/user'

const BookDetails = () => {
  const [ book, setBook ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();
  const { loggedIn} = useContext(UserContext)

  useEffect(async () => {
    const resp = await fetch(`/books/${id}`)
    const data = await resp.json();

    setBook(data);
    setLoading(false);

  }, [])

  if(loggedIn) {
    return (
      <div>
        <h1>{ book.title }</h1>
        <p>By: <NavLink to={`/authors/${ book.author.id }`}>{ book.author.name }</NavLink></p>
        <p>Genre: { book.genre }</p>
      </div>
    )
  } else {
    return (
      <h3>Access Denied - Please Signup or Login</h3>
    )
  }
  }



export default BookDetails;
