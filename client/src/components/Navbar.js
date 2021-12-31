import React, { useContext } from 'react'
import { NavLink, useNavigate} from 'react-router-dom'
import { UserContext } from './context/user'

const Nav = () => {
  const {user, logout, loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  const logoutUser = () => {
    fetch('/logout', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json'}
    })
    .then(() => {
      logout()
      navigate('/')
    })
  }


 if (loggedIn) {
  return (
    <div>
       <h1>Access Granted Welcome {user.username}</h1>
      <br />
      <button onClick={logoutUser}>Logout</button>
      <ul>
        <li><NavLink to="/authors" ><button>Authors</button></NavLink></li>
        <li><NavLink to="/books" ><button>Books</button></NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/books">Books</NavLink></li>
        <li><NavLink to="/authors">Authors</NavLink></li>
        <li><NavLink to="/authors/new">Create Author</NavLink></li>
      </ul>
    </div>
   )
  } else {
    return(
      <div>
        <NavLink to="/login"><button>Login</button></NavLink>
        <NavLink to="/signup"><button>Signup</button></NavLink>
      </div>
    )
  }
}

export default Nav
