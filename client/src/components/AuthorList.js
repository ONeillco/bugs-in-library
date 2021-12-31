import React, { useEffect, useState, useContext } from 'react';
import AuthorCard from './AuthorCard';
import { UserContext } from './context/user'


const AuthorList = () => {
  const [ authors, setAuthors ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const { loggedIn } = useContext(UserContext)

  useEffect(() => {
    const loadAuthors = async () => {
      const resp = await fetch(`/authors`)
      const data = await resp.json();
      setAuthors(data);
      setLoading(false);
    }
    loadAuthors();
  }, [])

  const deleteAuthor = async (id) => {
    await fetch(`/authors/${ id }`, { method: "DELETE" })
    removeAuthor( id );
    debugger
  }
  
  const removeAuthor = id => {
    setAuthors(authors.filter( author => author.id !== id))
  }

  if(loading){ return <h1>Loading...</h1>}

  if(loggedIn) {
  const authorCards = authors.map((author, index) => <AuthorCard key={ index } author={ author } deleteAuthor={ deleteAuthor }/>)

  return (
    <div>
      <h1>Authors</h1>
      { authorCards }
    </div>
  )
} else {
  return (
    <h3>Access Denied - Please Signup or Login</h3>
  )
}
}
export default AuthorList




















