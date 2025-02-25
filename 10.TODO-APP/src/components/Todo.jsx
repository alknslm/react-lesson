import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit, FaCheck } from "react-icons/fa";
import '../App.css';

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
    const { id, content } = todo;
    const [editable, setEditable] = useState(false);
    const [newTodo, setNewTodo] = useState(content);

    const removeTodo = () => {
        onRemoveTodo(id);
    }

    const updateTodo = () => {
        const request = {
            id: id,
            content: newTodo
        }
        onUpdateTodo(request);
        setEditable(false);
    }

    return (
        <div style={{
            display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between',
            border: '2px solid lightgray', borderRadius: '10px', marginTop: '5px'
        }}>
            <div>
                {
                    editable ?
                        <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
                            type="text" style={{ width: "400px", borderRadius: "10px" }} className='todo-input' />
                        :
                        content
                }
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' onClick={removeTodo} />

                {
                    editable ? <FaCheck className='todo-icons' onClick={updateTodo} />
                        :
                        <FaEdit className='todo-icons' onClick={() => setEditable(true)} />
                }
            </div>
        </div>
    )
}

export default Todo