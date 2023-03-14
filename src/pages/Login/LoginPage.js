import { LoginContainer, Logo, LoginForm, InputLoginForm, LoginButton } from "./loginStyles";
import img from "../../constants/img";
import { Link } from "react-router-dom";
export default function LoginPage (){
  return (
    <LoginContainer>

      <Logo src={img.logo} alt="logo da pagina"/>

      <LoginForm onSubmit={""}>

        <InputLoginForm
          required 
          type="email"
          placeholder="email"
        />

        <InputLoginForm
          required
          type="password"
          placeholder="senha"
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
