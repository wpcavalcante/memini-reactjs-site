import React from "react";

//Função que designa o design e os elementos para uma anotação já criada.
function Note(props){
    //Função para ativar a função de excluir uma anotação 
    function handleClick(){
        props.onDelete(props.id)
    }
    return(
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>EXCLUIR</button>
        </div>
    )       
}

export default Note;