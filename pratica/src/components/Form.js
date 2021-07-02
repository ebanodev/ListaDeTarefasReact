import React from 'react';
// As funções estão aqui.

//para não ter que escrever props toda hora, coloquei {setInutText}
const Form = ({setInputText, todos, inputText, setTodos, setStatus}) => {
  const inputTextHandler = (e) => {
  console.log(e.target.value);
    setInputText(e.target.value);
  };
// preventDefault tira a atualização total da página
  const submitTodoHandler = (e) => {
    e.preventDefault();
    //se houver alguma tarefa, a mesma deve ser passada. obs:tirar o math.random se utilizar isso em produção.
    setTodos([ ...todos, {text: inputText,   completed:false, id: Math.random() * 1000}, ]);
    //para apagar o state do imnputText
    setInputText("");  
  };
  //o setStatus faz entrar a alteração das opções no hook status do campo de filtro. Após isso foi feito o filterStatus no app.js


  const statusHandler = (e) => {
    setStatus(e.target.value)
  }

    return(
        <form>
          
          <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
          <button onClick={submitTodoHandler} className="todo-button"   type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select onChange={statusHandler} name="todos"    className="filter-todo">
              <option value="all">Tudo</option>
              <option   value="completed">OK</option>
              <option   value="uncompleted">A fazer</ option>
            </select>
          </div>
        </form>
        );
};

export default Form;