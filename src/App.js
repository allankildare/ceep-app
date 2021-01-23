import React from 'react'
import NotesList from './components/NotesList/NotesList'
import Form from './components/Form/Form'
import './assets/App.css'

function App() {
  return (
    <div className="content">
      <Form />
      <NotesList />
    </div>
  )
}

export default App