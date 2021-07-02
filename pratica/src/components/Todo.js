import React from 'react';
    //O useState do setTodo que está no App.js é passado para o TodoList pra depois vir pra cá. Isso acontece porque state e props no react só funciona de pai pra filho (de cima pra baixo, de fora pra dentro)

const Todo = ({text, todo, todos, setTodos}) => {
    // a função setTodo é usada para modificar o array do state
    
    const deleteHandler = () => {
        // o todos.filter serve para passar por todo array
        setTodos(todos.filter(el => el.id !== todo.id))
        
    };
    //sinalizador para quando clicar no checked
    const completeHandler = () => {
        setTodos(
            todos.map((item) => {
            if (item.id === todo.id) {
                return {
                    ...item, completed: !item.completed,
                    };
                }
                return item;                
           })
        );
    };
    return(
        <div className="todo">
            {/* adiciona a classe css completed quando clicar no checked, é usado acento e não asspas simples*/}
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={deleteHandler} className="trash-btn"><i className="fas fa-trash"></i></button>

        </div>
    );
}

export default Todo;