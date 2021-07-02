import  React from 'react';
import Todo from './Todo';
import '/home/ebano/Documentos/projetos/coding/aprendendoreact/pratica/pratica/src/App.css';

const TodoList = ({todos, setTodos, filteredTodos}) => {
   
    return (
        <div className="todo-container">
            <ul className="todo-list">{}
            {/* coloca o texto do array todo na lista */}
                {filteredTodos.map((todo) => (
                    // a key é necessária pro react saber apagar o componente da tela.
                    <Todo setTodos={setTodos} todo={todo} todos={todos} key={todo.id}text={todo.text} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;