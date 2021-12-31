//src/context/user.js
import React, { useState, useEffect } from "react"
import {  useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const UserContext = React.createContext()

function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loggedIn, setLoggedIn] = useState(false)
  const [authors, setAuthors] = useState([])
  const [books, setBooks] = useState([])
  const [author, setAuthor] = useState([])
  const [ name, setName ] = useState("");
  const { id } = useParams();
  const navigate = useNavigate()
  // const [ name, setName ] = useState("");
  // const [ author, setAuthor ] = useState(null);
  


  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data => {
      setUser(data)
      if (data.error) {
        setLoggedIn(false)
      } else {
        setLoggedIn(true)
        
      }
    })
  }, [])

  

  const login = (user) => {
    setUser(user)
    setLoggedIn(true)
  }

  const logout = () => {
    setUser({})
    setLoggedIn(false)
  }

  const signup = (user) => {
    setUser(user)
    setLoggedIn(true)
  }


  return (
    <UserContext.Provider value={{user, login, signup, logout, loggedIn, authors,  setAuthors }}>
        {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider }