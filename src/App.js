import React, { useState } from 'react'
import NotesList from './components/NotesList';
import {nanoid} from 'nanoid';

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
    }
  ]);

  return (
    <div className='container'>
      <NotesList/>
    </div>
  )
}

export default App