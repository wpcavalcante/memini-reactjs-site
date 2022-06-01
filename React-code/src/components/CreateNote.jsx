import React, {useState} from "react";


function CreateNote(props) {

//Criando um state vazio que ganhará os valores passados pelo usuário
    const[note, setNote] = useState({
      title:"",
      content:""
  })

    function handleChange(event){
        //Destruturando um objeto
        const {name, value} = event.target
        //setNote recebe a última anotação e usa o Spread para espalhar as informações do note em um novo objeto.
        setNote(prevNote =>{
            return{
                ...prevNote,
                [name]: value
            }
        });
    }

    function submitNote(event){
        //Passando o valor pra função addNote na aba APP.
        props.onAdd(note)
        //Limpa os valores digitados na anotação
        setNote({
            title:"",
            content:""
        })
        //preventDefault pra impedir o botão, dentro do form, de atualizar a página.
        event.preventDefault()
    }

  return (
    <div>
      <form className="create-note">
        {/* Valores do state passados pro título e conteúdo que será digitado pelo usuário. Ambos recebem a função handleChange que atualizará os valores. */}
        <input name="title" onChange={handleChange} value={note.title} placeholder="Title" />
        <textarea name="content" onChange={handleChange}value={note.content}placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateNote;
