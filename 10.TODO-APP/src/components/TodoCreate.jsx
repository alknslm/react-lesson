import React, { useState } from 'react'
import '../App.css'
function TodoCreate({ onCreateTodo }) {

    const [newTodo, setNewTodo] = useState('');

    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) {
            return;
        }
        const request = {
            id: Math.floor(Math.random() * 99999999999),
            content: newTodo
        }

        onCreateTodo(request);
        clearInput();
    }

    return (
        <div className='todo-create'>
            <input
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                type="text" placeholder='Todo Giriniz' className='todo-input' />

            <button onClick={createTodo} className='todo-button'>Todo Oluştur</button>
        </div>
    )
}

export default TodoCreate