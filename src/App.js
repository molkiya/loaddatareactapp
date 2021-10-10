import React, { useEffect, useState } from 'react';
import axios from 'axios'; 
import Cards from './components/cards/cards';
import Header from './components/header/header';
import './App.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const currentPage = 1;
  const todosPerPage = 24;

  useEffect(() => {
      const fetchPosts = async () => {
          try {
              setLoading(true);
              const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
              setTodos(res.data);
              setLoading(false);
            } catch (e) {
              // error handler
              console.log(new Error());
          }
      }

      fetchPosts();
  }, []);

  // These counting are needful number of shown cards
  // The logic is created for future scalability (in theory)
  // for recreation tables of cards 

  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // log for view before: res = []
  // after: (200) [...{}]
  // is how many todos was loaded through axios

  console.log(todos)

  return (
    <>
      <Header />
      <Cards todos={currentTodos} loading={loading} />
    </>
  )
}

