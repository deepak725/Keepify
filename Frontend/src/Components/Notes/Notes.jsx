import React, { useEffect, useState } from "react";
import Note from "../Note/Note";
import { IoIosAdd } from "react-icons/io";
import './Notes.css'

function Notes ({ onAdd }) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [notes, setNotes] = useState([]);

  // useEffect(() => {
  //   fetch("https://retoolapi.dev/UPF9Vy/data")
  //   .then((res) => res.json())
  //   .then((data) => {
  //    // console.log(data);
  //     setNotes(data);
  //     console.log(notes);
  //   });
 // }); 

  function handleChange(e) {
    const { name, value } = e.target;
    
    setNote((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }
  function handleExpanded() {
    setExpanded(true);
  }

  function submitButton(event) {
    //  fetch("https://retoolapi.dev/UPF9Vy/data")
    // .then((res) => res.json())
    // .then((data) => {
    //  // console.log(data);
    //   setNotes(data);
    // //  console.log(notes);
      
    // });
   
    setNote({
      title: "",
      content: "",
    });
    console.log(notes);
    event.preventDefault();
  }
  const apiGet = (event) => {
    fetch("https://retoolapi.dev/UPF9Vy/data")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setNotes(json);
      });
      event.preventDefault();
  };

  return (
    <div className="Notes">
      <form>
      <input
            value={note.title}
            type="text"
            placeholder="Search"
            name="title"
            onChange={handleChange}
           
          />
      </form>
      <form>
      
        {isExpanded && (
          <input
            value={note.title}
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            onChange={handleChange}
          />
        )}
        <p>
          <textarea
            value={note.content}
            onClick={handleExpanded}
            name="content"
            placeholder="Take a note..."
            onChange={handleChange}
            rows={isExpanded ? 3 : 1}
          ></textarea>
        </p>
        <button onClick={apiGet}>
          <IoIosAdd size={35} />
        </button>
       
      </form>
      <div className="notes-item">
        {notes.map((note, index) => (
        <Note
          key={index}
          title={note.id}
          content={note.fullName}
         
        />
      ))}
      </div>
    </div>
  );
}

export default Notes;