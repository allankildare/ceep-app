import React, { Component } from "react";
import Card from "../Card/Card";
import './NotesList.css'

class NotesList extends Component {
  render() {
    return (
      <ul className="notes-list">
        {Array.of("Trabalho", "Estudos", "Lazer").map((category, index) => {
          return (
            <li className="notes-list_item" key={index}>
              <div>{category}</div>
              <Card />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default NotesList;
