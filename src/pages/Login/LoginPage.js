import { LoginContainer, Logo, LoginForm, InputLoginForm, LoginButton } from "./loginStyles";
import img from "../../constants/img";
import { Link, useNavigate } from "react-router-dom";
export default function LoginPage ({setLogged}){
  const navigate = useNavigate()
  
  function tryToLogin (e){
    e.preventDefault();
    setLogged(true);
    navigate("/habitos")
  }
  
  return (
    <LoginContainer>

      <Logo src={img.logo} alt="logo da pagina"/>

      <LoginForm onSubmit={tryToLogin}>

        <InputLoginForm
          required 
          type="email"
          placeholder="email"
          value = "email@email.com"
        />

        <InputLoginForm
          required
          type="password"
          placeholder="senha"
          value="123456"
        />

        <LoginButton type="submit">
          Entrar
        </LoginButton>

      </LoginForm>

      <Link to = "/cadastro">
        Não tem uma conta? Cadastre-se!
      </Link>

    </LoginContainer>
  )
}
