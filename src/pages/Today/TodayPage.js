import { TodayContainer, CurrentDay, Message, CurrentHabitsList, CurrentDateContainer } from "./todaystyles";
import weekdays from "../../constants/weekdaysName";
import CurrentHabitCard from "../../components/CurrentHabitCard/CurrentHabitCard";
import { useEffect, useContext, useState } from "react";
import UserContext from "../../contextAPI/userContext";
import BASE_URL from "../../constants/BASE_URL";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function TodayPage() {
  const { userData, setUserData } = useContext(UserContext);
  const [completed, setCompleted] = useState([]);
  const [percentage, setPercentage] = useState(0);
  const dayjs = require("dayjs");
  const navigate = useNavigate();
  const config = {
    headers: {
      "Authorization": `Bearer ${userData.token}`
    }
  };
  useEffect(() => {
    axios.get(`${BASE_URL}/today`, config)
      .then(({ data }) => {
        setUserData({ ...userData, todayHabitsList: data, completedHabits: data.filter(({ done }) => done === true) })
        setPercentage(Math.floor((data.filter(({ done }) => done === true).length / data.length) * 100))
      })
      .catch(erro => {
        console.log(erro.message)
      })

    if (!userData.isLogged) {
      navigate("/")
    }

  }, [completed]);

  function currentDay() {
    return `${weekdays[dayjs().format("dddd")]}, ${dayjs().format("DD")}/${dayjs().format("MM")}`
  }

  return (
    <TodayContainer>
      <CurrentDateContainer>
        <CurrentDay data-test="today">
          {currentDay()}
        </CurrentDay>
        <Message check={percentage > 0} data-test="today-counter">
          {percentage > 0 ? `${percentage}% dos hábitos concluídos` : "Nenhum hábito concluido ainda"}
        </Message>
      </CurrentDateContainer>

      <CurrentHabitsList>
        {userData.todayHabitsList.map(({ id, name, done, currentSequence, highestSequence }) => {
          return (
            <CurrentHabitCard
              key={id}
              id={id}
              name={name}
              done={done}
              currentSequence={currentSequence}
              highestSequence={highestSequence}
              completed={completed}
              setCompleted={setCompleted}
            />
          )
        })}
      </CurrentHabitsList>
    </TodayContainer>
  )
}