import {Routes,Route} from 'react-router-dom'
import './App.css';
import Home from './components/homepage/Home';
import CreateBlog from './components/createblog/CreateBlog';
import ReadBlog from './components/readblog/ReadBlog';
import { useContext } from 'react';
import Login from './components/login page/Login';
import { authcontext } from './components/contextapi/contextapi';


function App() {
  const {islogin}=useContext(authcontext)
  return (
    <>
      <Routes>
       <Route path='/' element={islogin ? <Home/> : <Login/>}/>
        <Route path='craeteblog' element={<CreateBlog/>} />
        <Route path='/:id' element={<ReadBlog/>} />
      </Routes>
    </>
  );
}

export default App;
