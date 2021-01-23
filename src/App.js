import React, { Component } from 'react'
import NotesList from './components/NotesList/NotesList'
import Form from './components/Form/Form'
import './assets/App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
  }

  noteCreation(title, text) {
    const newNote = {title, text}
    const newNotesArray = [...this.state.notes, newNote]
    const newState = {
      notes: newNotesArray
    }
    this.setState(newState)
  }

  render() {
    return (
      <div className="content">
        <Form noteCreation={this.noteCreation.bind(this)} />
        <NotesList notes={this.state.notes} />
      </div>
    )
  }
}

export default App