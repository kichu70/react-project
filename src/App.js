
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import ViewProduct from './Pages/ViewProduct';
import Edititem from './Components/Edit/Edititem';
import Login from './Components/Login/Login';
import { useAuth } from './Context/Auth';

function App() {
  const { user } = useAuth();
  return (
    <div className="App">
      {/* <Home/> */}
      <BrowserRouter>
        {user ?(
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/viewProduct/:id' element={<ViewProduct/>}/>
      </Routes>
        ):(
          <Login/>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
