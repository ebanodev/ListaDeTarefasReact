import React from 'react'

//para não ter que escrever props toda hora, coloquei {setInutText}
const Form = ({setInputText}) => {
  const inputTExtHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  }
    return(
        <form>
          <input onChange={inputTExtHandler} type="text" className="todo-input" />
          <button className="todo-button"   type="submit">
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