import React, { useState } from 'react'
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {

  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/04/2022"
    },
    {
      id: nanoid(),
      text: "This is my second note",
      date: "25/01/2022"
    },
    {
      id: nanoid(),
      text: "This is my third note",
      date: "23/12/2021"
    },
    {
      id: nanoid(),
      text: "This is my fourth note",
      date: "11/08/2020"
    },
    {
      id: nanoid(),
      text: "This is my fifth note",
      date: "08/11/2020"
    }
  ]);

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text : text,
      date: date.toLocaleDateString()
    }


    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode}/>
        <Search handleSearchNote = {setSearchText}/>
        <NotesList notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))} handleAddNote = {addNote} handleDeleteNote = {deleteNote} />
      </div>
    </div>
  )
}

export default App