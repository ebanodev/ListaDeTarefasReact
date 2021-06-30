import  React from 'react';
import Todo from './Todo';
import '/home/ebano/Documentos/projetos/coding/aprendendoreact/pratica/pratica/src/App.css';

const TodoList = ({todos}) => {
   
    return (
        <div className="todo-container">
            <ul className="todo-list">{}
                {todos.map((todo) => (
                    <Todo text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;