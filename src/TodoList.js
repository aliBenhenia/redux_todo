import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo } from './Action';

function TodoList() {
    const [newTodo, setNewTodo] = useState('');
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();

    function handleAddTodo() {
        dispatch(addTodo(newTodo));
        setNewTodo('');
    }

    function handleRemoveTodo(index) {
        dispatch(removeTodo(index));
    }

    return (
        <div>
            <input type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
            <button onClick={handleAddTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleRemoveTodo(index)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;