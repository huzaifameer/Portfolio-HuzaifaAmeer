
import './App.css';
import About from './Routes/About';
import HomePage from "./Routes/Home";
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/About' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
