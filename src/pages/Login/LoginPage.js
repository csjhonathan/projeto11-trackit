import { LoginContainer, Logo, LoginForm, InputLoginForm, LoginButton } from "./loginStyles";
import img from "../../constants/img";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants/BASE_URL";
export default function LoginPage (){
  const [disabled, setDisabled] = useState(false)
  const [login, setLogin] = useState({email : "", password : ""})
  const navigate = useNavigate();
  

  function tryToLogin (e){
    e.preventDefault();
    setDisabled(true)
    axios.post(`${BASE_URL}/auth/login`, login)
      .then(({data}) => {
        console.log(data)
        navigate("/hoje")
      })
      .catch(erro => {
        alert(erro.response.data.message)
        setDisabled(false)
      })
    // setLogged(true);
    // navigate("/habitos")
  }
  function handleUserLogin(e){
    setLogin({...login, [e.name] : e.value})
  }
  return (
    <LoginContainer>

      <Logo src={img.logo} alt="logo da pagina"/>

      <LoginForm onSubmit={tryToLogin}>

        <InputLoginForm
          required 
          type="email"
          name="email"
          placeholder="email"

          value = {login.email}
          onChange={e => handleUserLogin(e.target)}
          disabled={disabled}

          data-test="email-input"
        />

        <InputLoginForm
          required
          type="password"
          name="password"
          placeholder="senha"

          value= {login.password}
          onChange={e => handleUserLogin(e.target)}
          disabled={disabled}

          data-test="password-input"
        />

        <LoginButton type="submit" disabled={disabled} data-test="login-btn">
          Entrar
        </LoginButton>

      </LoginForm>

      <Link to = "/cadastro" data-test="signup-link">
        Não tem uma conta? Cadastre-se!
      </Link>

    </LoginContainer>
  )
}
