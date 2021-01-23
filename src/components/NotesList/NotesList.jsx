import React, { Component } from "react";
import Card from "../Card/Card";
import './NotesList.css'

class NotesList extends Component {
  render() {
    return (
      <ul className="notes-list">
        {this.props.notes.map((note, index) => {
          return (
            <li className="notes-list_item" key={index}>
              <Card title={note.title} text={note.text} />
            </li>
          )
        })}
      </ul>
    );
  }
}

export default NotesList;
