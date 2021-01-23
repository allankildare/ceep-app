import React, { Component } from "react";
import "./Card.css";
class Card extends Component {
  render() {
    return (
      <section className="card">
        <header className="card_header">
          <h3 className="card_title">{this.props.title}</h3>
        </header>
        <p className="card_text">{this.props.text}</p>
      </section>
    );
  }
}

export default Card;
