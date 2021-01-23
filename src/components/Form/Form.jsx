import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  
  render() {
    return (
      <form className="form">
        <input type="text" placeholder="Título" className="form_input" />
        <textarea rows={15} placeholder="Escreva sua nota..." className="form_input" />
        <button className="form_input form_submit">Criar nota</button>
      </form>
    );
  }
}

export default Form