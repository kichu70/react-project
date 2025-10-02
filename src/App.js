
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import ViewProduct from './Pages/ViewProduct';
import Edititem from './Components/Edit/Edititem';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
        {/* <Edititem/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/viewProduct/:id' element={<ViewProduct/>}/>
      </Routes>
    </div>
  );
}

export default App;
