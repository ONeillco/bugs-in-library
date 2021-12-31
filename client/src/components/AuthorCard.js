import React, { useContext} from 'react'
import { NavLink } from 'react-router-dom';
import { UserContext } from './context/user'

const AuthorCard = ({ author, deleteAuthor }) => {
  const { loggedIn} = useContext(UserContext)

  if(loggedIn) {
  return (
    <li>
      <NavLink to={`/authors/${author.id}`}>{ author.name }</NavLink> - <button onClick={ () => deleteAuthor(author.id) }>Delete</button>
    </li>
  )
} else {
  return (
    <h3>Access Denied - Please Signup or Login</h3>
  )
}
}

export default AuthorCard











