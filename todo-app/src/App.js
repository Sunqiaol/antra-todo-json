import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Todo from "./components/todo";
import Todoform from "./components/todo-form";
import EditTodo from './components/todo-edit-form';
import { getTodos, createTodo, deleteTodo, editTodo } from "./apis/todoapi"
function App() {

  const [todos, setTodos] = useState([]);
  const [editingTodo, setEditingTodo] = useState(null);

  const deleteHandler = async (index) => {
    try {
      const res = await deleteTodo(index);
      setTodos(todos.filter((todo) => todo.id !== index));
    } catch (error) {
      console.log(error);
    }
  };

  const addNewTodo = async (newTodoValue) => {
    const newTodo = { content: newTodoValue, };
    if (newTodoValue != "") {
      try {
        const res = await createTodo(newTodo)
        const newTodos = [...todos, res];
        setTodos(newTodos);
      }
      catch (error) {
        console.log(error);
      }

    }

  };

  const editHandler = async (id, content) => {
    try {
      const res = await editTodo(id, content);
      setTodos(todos.map(todo => (todo.id === id ? res : todo)))
      setEditingTodo(null);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllTodo = async () => {
    const res = await getTodos();
    setTodos(res);
  };

  useEffect(() => {
    getAllTodo();
  }, []);

  return (
    <div>
      <Todoform addNewTodo={addNewTodo} />
      {editingTodo ? (
        <EditTodo
          EditTodoFunction={(content) => editHandler(editingTodo.id, content)}
          content={editingTodo.content} />
      ) : (

        todos.map((todo, index) => {
          return (
            <Todo
              title={todo.content}
              deleteHandler={() => deleteHandler(todo.id)}
              editHandler={() => setEditingTodo(todo)}
              key={index}
            />
          );
        })
      )
      }
    </div>
  );
}

export default App;
