import React, {useState} from "react";
import Heading from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateNote from "./CreateNote";


function App(){
    const[notes, setNotes] = useState([])
    //Função que recebe o valor da anotação feita em CreateNote
    function addNote(newNote){
        setNotes(prevNotes =>{
            return [...prevNotes, newNote]
        })
    }
    //Função para excluir uma anotação
    function deleteNote(id){
        setNotes(prevNotes =>{
            return prevNotes.filter((noteItem, index)=>{
                return index !== id
            })
        })
    }

    return(
        <div>
            <Heading/>
            <CreateNote onAdd={addNote} />
            {notes.map((noteItem, index) => {
                return <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}/>
            })}
            <Footer/>
        </div>
    )
}

export default App;