import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from './context/user'
import { useNavigate } from 'react-router-dom'

const NewBook = () => {
  const [author, setAuthor] = useState(null);
  const { loggedIn} = useContext(UserContext)
  const navigate = useNavigate()
  const [state, setState] = useState({
    title: "",
    genre: ""
  })
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
 

  useEffect(async (id) => {
    const resp = await fetch(`/authors/${id}`)
    const data = await resp.json();
    debugger
    setAuthor(data);
    setLoading(false);
  }, [])

  if(loading){ return <h1>Loading...</h1>};

  const handleChange = e => {
    // change state dynamically for both title and genre
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(state)
    }    
    await fetch(`/authors/${id}/books`, options)
    debugger

    // history.push(`/authors/${ authorId }`);
    navigate(`/authors/${ id }`)
  }

  if(loggedIn) {
  return (
    <div>
      <h3>Create Book For { author.name }</h3>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" name="title" id="title" value={ state.title } onChange={ handleChange } />
        </div>
        <br />
        <div>
          <label htmlFor="genre">Genre: </label>
          <input type="text" name="genre" value={ state.genre } onChange={ handleChange } />
        </div>
        <br />
        <input type="submit" value="Create Book" />
      </form>
    </div>
  )
} else {
  return (
    <h3>Access Denied - Please Signup or Login</h3>
  )
}
}

export default NewBook
