import { Route, Routes } from 'react-router-dom';
import './App.css';
import Details from './components/Details';
import Errror from './components/Error';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='*' element={<Errror/>} />



    </Routes>
    </>
  )
}

export default App;
