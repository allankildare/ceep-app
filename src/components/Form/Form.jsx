import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  
  constructor(props) {
    super(props)
    this.title = ""
    this.text = ""
  }

  _handleTitleChange(event) {
    event.stopPropagation()
    this.title = event.target.value
  }

  _handleTextChange(event) {
    event.stopPropagation()
    this.text = event.target.value
  }

  _noteCreation(event) {
    event.preventDefault()
    event.stopPropagation()
    this.props.noteCreation(this.title, this.text)
  }
  
  render() {

    return (
      <form className="form" onSubmit={this._noteCreation.bind(this)} >
        <input type="text"
          placeholder="Título"
          className="form_input"
          onChange={this._handleTitleChange.bind(this)} // Dinamismo do this no JS
        />
        <textarea rows={15}
          placeholder="Escreva sua nota..."
          className="form_input"
          onChange={this._handleTextChange.bind(this)}
        />
        <button className="form_input form_submit">Criar nota</button>
      </form>
    );
  }
}

export default Form