import React, { Component } from 'react';
import './Card.css'
class Card extends Component {
  render() {
    return (
      <section className="card">
        <header className="card_header">
          <h3 className="card_title">Título</h3>
        </header>
        <p className="card_text">Escreva sua nota</p>
      </section>
    );
  }
}

export default Card;
