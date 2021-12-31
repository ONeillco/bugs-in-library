import React from 'react';
import { Route, Routes } from 'react-router-dom'

import Navbar from './components/Navbar';
import AuthorList from './components/AuthorList';
import NewAuthor from './components/NewAuthor';
import EditAuthor from './components/EditAuthor';
import AuthorDetails from './components/AuthorDetails';
import BookList from './components/BookList';
import NewBook from './components/NewBook';
import BookDetails from './components/BookDetails';
import Home from './components/Home';

import PageNotFound from './components/PageNotFound';
import { UserProvider } from './components/context/user';
import Signup from './components/sessions/Signup';
import Login from './components/sessions/Login';

function App() {
  return (
    
      <div className="App">
        <UserProvider>
        <Navbar />
        <Routes>
          <Route exact path="/" element={ <Home />} />
          <Route exact path="/signup" element={<Signup />} /> 
//        <Route exact path="/login" element={<Login />} /> 
          <Route exact path="/authors" element={ <AuthorList />} />
          <Route exact path="/authors/new" element={ <NewAuthor /> } />
          <Route exact path="/authors/:id/edit" element={ <EditAuthor/> } />
          <Route exact path="/authors/:id" element={ <AuthorDetails />} />
          <Route exact path="/books" element={ <BookList />} />
          <Route exact path="/authors/:authorId/books/new" element={ <NewBook />} />
          <Route exact path="/books/:id" element={ <BookDetails />} />
          <Route element={ PageNotFound } />
          </Routes>
         </UserProvider>
      </div>
    
  );
}

export default App;
