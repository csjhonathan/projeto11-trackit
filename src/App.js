// dependencies & hooks
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
// pages & components
import LoginPage from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage ";
import HabitsPage from "./pages/Habits/HabitsPage";
import TodayPage from "./pages/Today/TodayPage";
import HistoricPage from "./pages/Historic/HistoricPage";
import Top from "./components/Top/Top";
import NavBar from "./components/NavBar/NavBar";
//styles
import Global from "./GlobalStyles/GlobalStyles";
import ResetStyle from "./GlobalStyles/Reset ";

function App() {
  const [logged, setLogged] = useState(false);
  
  return (
    <BrowserRouter>
      <ResetStyle/>
      <Global/>
      {logged && <Top/>}
      <Routes>
        <Route path ="/" element = {<LoginPage />}></Route>
        <Route path ="/cadastro" element = {<Register/>}></Route>
        <Route path ="/habitos" element = {<HabitsPage setLogged = {setLogged}/>}></Route>
        <Route path ="/hoje" element = {<TodayPage/>}></Route>
        <Route path ="/historico" element = {<HistoricPage/>}></Route>
      </Routes>
      {logged && <NavBar/>}
    </BrowserRouter>
  );
}

export default App;
