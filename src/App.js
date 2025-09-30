
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import ViewProduct from './Pages/ViewProduct';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/viewProduct/:id' element={<ViewProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
