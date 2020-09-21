import React from 'react';
import './App.css';
import Note from './components/note/Note';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import AddNote from './components/note/AddNote';
import SearchNote from './components/note/SearchNote';
import UserList from './components/profile/UserList';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path= '/'component={UserList} />
          <Route path= '/search'component={SearchNote} />
        </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
