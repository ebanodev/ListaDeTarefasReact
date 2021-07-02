import React, {useState,useEffect} from "react";
import './App.css';
//importando componentes
import Form from "./components/Form";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

//para passar o inputTExt para o TodoList, é criado uma outra constante para o usestate que recebe um array.

function App() {
  
  //states
  const [inputText, setInputText] = useState("");
  // armazena as tarefas dentro de um array (quando o item digitado é jogado para a lista)
  const [todos, setTodos] = useState([]);
  // filtros de tarefas (menuzinho) com a opção all default
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] = useState([]);


  //para carregar o json que estiver na máquina, assim que a aplicação é iniciada:
  useEffect(() => {
    getLocalTodos();
  }, [])

  //useEffect
  // O array no segundo parametro da arrow function, faz com que a função (primeiro parametro) seja executada uma vez quando os valores especificadas no array forem modificados.
  useEffect(() => {
    filterHandler();
    saveLocalTodos();

  }, [todos, status]);

  //Funções:
  //atualiza copia o state dos arrays do setTodos para o filteredTodos de acordo com o filtro escolhido pelo usuário
  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  // salavando local

  const saveLocalTodos = () =>{
   
      localStorage.setItem("todos", JSON.stringify(todos))
  };
  const getLocalTodos = () =>{
    if (localStorage.getItem("todos") === null){
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
    let todoLocal =  JSON.parse(localStorage.getItem("todos"));
    setTodos(todoLocal)
    }
    
  };

  return (
    <div className="App">
      <header>
        <h1>Lista De Tarefas De Ébano Assumpção <br/></h1>
      </header>
      {/* o que recebe a chave pode ser qualquer nome, mas a chave tem que ser o nome da função. O value é para apagar o formulá */}
      <Form 
        value={inputText}
        inputText={inputText}
        todos={todos} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
        />
      <TodoList filteredTodos={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
