import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from './context/user'


const NewAuthor = () => {
  const [ name, setName ] = useState("");
  const { loggedIn } = useContext(UserContext)
  const navigate = useNavigate()

  const handleChange = e => {
    setName(e.target.value)
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
    const body = { name: name }
    const options = {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    }
    await fetch(`/authors`, options)
    
    navigate('/authors')
  }

  if(loggedIn) {
  return (
    <div>
      <h1>New Author</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={ name } onChange={ handleChange } autoFocus={ true } />
        </div>
        <br />
        <input type="submit" value="Create Author" />
      </form>
    </div>
  )
} else {
  return (
    <h3>Access Denied - Please Signup or Login</h3>
  )
}
}

export default NewAuthor
