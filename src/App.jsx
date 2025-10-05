import {Routes, Route} from 'react-router-dom';
import FetchData from './components/FetchData';
import ToDoList from './components/ToDoList';
import Accordian from './components/Accordian';
import LandingPage from './components/LoadingScreen';
import Theme from './components/Theme';
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/fetch" element={<FetchData />} />
      <Route path="/todoList" element={<ToDoList />} />
      <Route path="/accordian" element={<Accordian />} />
      <Route path="/theme" element={<Theme />} />
    </Routes>
  )
}

export default App
