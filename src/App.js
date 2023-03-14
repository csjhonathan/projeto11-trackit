// dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom"

// pages
import LoginPage from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage ";
import HabitsPage from "./pages/Habits/HabitsPage";
import TodayPage from "./pages/Today/TodayPage";
import HistoricPage from "./pages/Historic/HistoricPage";

//styles
import Global from "./GlobalStyles/GlobalStyles";
import ResetStyle from "./GlobalStyles/Reset ";
function App() {
  return (
    <BrowserRouter>
      <ResetStyle/>
      <Global/>
      <Routes>
        <Route path ="/" element = {<LoginPage/>}></Route>
        <Route path ="/cadastro" element = {<Register/>}></Route>
        <Route path ="/habitos" element = {<HabitsPage/>}></Route>
        <Route path ="/hoje" element = {<TodayPage/>}></Route>
        <Route path ="/historico" element = {<HistoricPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
