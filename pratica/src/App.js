import React, {useState} from "react";
import './App.css';
//importando componentes
import Form from "./components/Form";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

//para passar o inputTExt para o TodoList, é criado uma outra constante para o usestate que recebe um array.

function App() {
  const [inputText, setInputText] = useState("");
  // armazena as tarefas dentro de um array
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>Ebano Assumpção Lista de tarefas <br/> {inputText}</h1>
      </header>
      {/* o que recebe a chave pode ser qualquer nome, mas a chave tem que ser o nome da função. O value é para apagar o formulá */}
      <Form 
        value={inputText}
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
