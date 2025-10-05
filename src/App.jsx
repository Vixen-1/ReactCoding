import {Routes, Route} from 'react-router-dom';
import FetchData from './components/FetchData';
import ToDoList from './components/ToDoList';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/fetch" element={<FetchData />} />
      <Route path="/todoList" element={<ToDoList />} />
    </Routes>
  )
}

export default App
