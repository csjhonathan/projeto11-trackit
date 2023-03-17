// dependencies & hooks
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import UserContext from "./contextAPI/userContext";
// pages & components
import LoginPage from "./pages/Login/LoginPage";
import Register from "./pages/Register/RegisterPage ";
import HabitsPage from "./pages/Habits/HabitsPage";
import TodayPage from "./pages/Today/TodayPage";
import HistoricPage from "./pages/Historic/HistoricPage";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
//styles
import Global from "./GlobalStyles/GlobalStyles";
import ResetStyle from "./GlobalStyles/Reset ";

function App() {
  const [userData, setUserData] = useState({token : "", isLogged : false, image : "" , habitsList : [], todayHabitsList : [], completedHabits: [], userHistoric : []});
 
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
        <ResetStyle/>
        <Global/>
        {userData.isLogged && <Header/>}
        <Routes>
          <Route path ="/" element = {<LoginPage />}></Route>
          <Route path ="/cadastro" element = {<Register/>}></Route>
          <Route path ="/habitos" element = {<HabitsPage/>}></Route>
          <Route path ="/hoje" element = {<TodayPage />}></Route>
          <Route path ="/historico" element = {<HistoricPage/>}></Route>
        </Routes>
        {userData.isLogged && <NavBar/>}
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
