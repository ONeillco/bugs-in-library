import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from './context/user'

const BookCard = ({ book, author, deleteBook }) => {
  const { loggedIn} = useContext(UserContext)

  if(loggedIn) {
  return (
    <li>
      <NavLink to={`/books/${book.id}`}>{ book.title }</NavLink> - { book.genre } - by: { author.name } - <button onClick={ () => deleteBook( book.id ) }>Delete</button>
    </li>
  )
} else {
  return (
    <h3>Access Denied - Please Signup or Login</h3>
  )
}
}

export default BookCard