import React from 'react';


//para não ter que escrever props toda hora, coloquei {setInutText}
const Form = ({setInputText, todos, inputText, setTodos,}) => {
  const inputTextHandler = (e) => {
  console.log(e.target.value);
    setInputText(e.target.value);
  };
// preventDefault tira a atualização total da página
  const submitTodoHandler = (e) => {
    e.preventDefault();
    //se houver alguma tarefa, a mesma deve ser passada. obs:tirar o math.random se utilizar isso em produção.
    setTodos([ ...todos, {text: inputText,   complete:false, id: Math.random() * 1000}, ]);
    //para apagar o state do imnputText
    setInputText("");
    

    
    
  };

    return(
        <form>
          <input onChange={inputTextHandler} type="text" className="todo-input" />
          <button onClick={submitTodoHandler} className="todo-button"   type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select name="todos"    className="filter-todo">
              <option value="all">All</option>
              <option   value="completed">Completed</option>
              <option   value="uncompleted">Uncompleted</ option>
            </select>
          </div>
        </form>
        );
};

export default Form;