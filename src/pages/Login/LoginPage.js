import { LoginContainer, Logo, LoginForm, InputLoginForm, InputLoginFormCheckBox, LoginButton, KeepLoggedArea, CheckLabel } from "./loginStyles";
import img from "../../constants/img";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import BASE_URL_LOGIN from "../../constants/BASE_URL_LOGIN";
import Loader from "../../components/Loader/Loader";
import UserContext from "../../contextAPI/userContext";


export default function LoginPage() {
  const [disabled, setDisabled] = useState(false)
  const [login, setLogin] = useState({ email: "", password: "" })
  const [keepLogin, setKeepLogin] = useState(false);
  const navigate = useNavigate();
  const { userData, setUserData } = useContext(UserContext)
  useEffect(() => {
    if (localStorage.token !== undefined && localStorage.token !== null) {
      setUserData({ ...userData, isLogged: localStorage.isLogged, token: localStorage.token, image: localStorage.image });
      navigate("/hoje");
    }
  }, []);
  function tryToLogin(e) {
    e.preventDefault();
    setDisabled(true)
    axios.post(`${BASE_URL_LOGIN}/auth/login`, login)
      .then(({ data }) => {
        if (keepLogin) {
          localStorage.clear();
          localStorage.setItem("isLogged", true)
          localStorage.setItem("token", data.token)
          localStorage.setItem("image", data.image)
        }
        setUserData({ ...userData, isLogged: true, token: data.token, image: data.image });
        navigate("/hoje")
      })
      .catch(erro => {
        alert(erro.response.data.message)
        console.log("erro")
        setDisabled(false)
      })
  }
  function handleUserLogin(e) {
    setLogin({ ...login, [e.name]: e.value })
  }
  return (
    <LoginContainer>

      <Logo src={img.logo} alt="logo da pagina" />

      <LoginForm onSubmit={tryToLogin}>

        <InputLoginForm
          required
          type="email"
          name="email"
          placeholder="email"

          value={login.email}
          onChange={e => handleUserLogin(e.target)}
          disabled={disabled}

          data-test="email-input"
        />

        <InputLoginForm
          required
          type="password"
          name="password"
          placeholder="senha"

          value={login.password}
          onChange={e => handleUserLogin(e.target)}
          disabled={disabled}

          data-test="password-input"
        />

        <KeepLoggedArea>
          <CheckLabel htmlFor="keepLogged">Manter logado :</CheckLabel>
          <InputLoginFormCheckBox
            type="checkbox"
            name="keepLogged"
            onChange={() => setKeepLogin(!keepLogin)}
            disabled={disabled}
          />
        </KeepLoggedArea>

        <LoginButton type="submit" disabled={disabled} data-test="login-btn">
          {disabled ? <Loader /> : "Entrar"}
        </LoginButton>

      </LoginForm>

      <Link to="/cadastro" data-test="signup-link">
        Não tem uma conta? Cadastre-se!
      </Link>

    </LoginContainer>
  )
}
