import { useState } from 'react'
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'
import Loading from './components/Loading';
import Card from './components/Card';
import NightMode from './components/NightMode';

function App() {

  //! todoları toplamak için ana componentde dizi oluşturuldu
  const [todos, setTodos] = useState([]);

  //! yeni oluşturulan todo için diziye ekleme yapıldı
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
    // eski todoları al, yenisini üstüne ekle
  }

  const removeTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id != todoId)]); //remove ile gelen idlere eşit olmayanları al
  }



  const updateTodo = (newTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id != newTodo.id) {
        return todo;
      }
      return newTodo;
    })

    setTodos([...updatedTodos]);
  }

  console.log(todos);

  return (
    <div className='App'>
      <div className='todo-div'>
        <TodoCreate onCreateTodo={createTodo} /> {/* componente props olarak create methodu gönderildi*/}
        <TodoList todos={todos} onRemoveTodo={removeTodo} onUpdateTodo={updateTodo} />
      </div>
      <div>
        <Loading />
      </div>
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <Card />
        <NightMode />
      </div>
    </div>
  )
}

export default App
