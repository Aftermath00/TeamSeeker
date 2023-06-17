import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from "./Pages/Login";
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import MainPage from './Pages/MainPage';
import SignupForm from './Pages/SignupForm';
import SignupRoleChoosePage from './Pages/SignupRoleChoosePage';
import SignupFormTeam from './Pages/SignupFormTeam';

export default function App(){
  return(

    <Router>
      <Routes>
        <Route path='/' element = {<Login/>}/>
        <Route path='/signup' element = {<Signup/>}/>
        <Route path='/role' element = {<SignupRoleChoosePage/>}/>
        <Route path='/individual' element = {<SignupForm/>}/>
        <Route path='/team' element = {<SignupFormTeam/>}/>
        <Route path='/home' element = {<MainPage/>}/>
        <Route path='*' element = {<NotFound/>}/>
      </Routes>
    </Router>
  )
}