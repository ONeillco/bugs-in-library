import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from './context/user'
import { useNavigate } from 'react-router-dom'

const EditAuthor = () => {
  const [ name, setName ] = useState("");
  const [ author, setAuthor ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const { id } = useParams();
  const { loggedIn} = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(async () => {
    const resp = await fetch(`/authors/${id}`)
    const data = await resp.json();
    setAuthor(data);
    setName(data.name);
    setLoading(false);
  }, [])

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
      method: "PATCH",
      headers,
      body: JSON.stringify(body)
    }
    await fetch(`/authors/${ id }`, options)
     
    navigate(`/authors`)
  }

  if(loading){ return <h1>Loading...</h1>};

  if(loggedIn) {
  return (
    <div>
      <h1>Edit { author.name }</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" value={ name } onChange={ handleChange } autoFocus={ true } />
        </div>
        <br />
        <input type="submit" value="Update Author" />
      </form>
    </div>
  )
} else {
  return (
    <h3>Access Denied - Please Signup or Login</h3>
  )
}
}

export default EditAuthor
