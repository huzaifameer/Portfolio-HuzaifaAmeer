
import './App.css';
import HomePage from "./Routes/Home";
import About from './Routes/About';
import Project from './Routes/Projects';
import Experience from './Routes/Experience';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/Projects' element={<Project/>} />
        <Route path='/Experience' element={<Experience/>} />
      </Routes>
    </div>
  );
}

export default App;
