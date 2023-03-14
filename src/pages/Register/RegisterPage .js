import { RegisterContainer, Logo, RegisterForm, InputRegisterForm, RegisterButton } from "./registerStyles";
import img from "../../constants/img";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <RegisterContainer>
      <Logo src={img.logo} />

      <RegisterForm onSubmit={""}>

        <InputRegisterForm
        required
        type="email"
        placeholder="email"
        />

        <InputRegisterForm
        required
        type="password"
        placeholder="senha"
        />

        <InputRegisterForm
        required
        type="name"
        placeholder="nome"
        />
        
        <InputRegisterForm
        required
        type="url"
        placeholder="foto"
        />

        <RegisterButton type="submit">
          Cadatrar
        </RegisterButton>

      </RegisterForm>

      <Link to = "/">
        Já tem uma conta? Faça login!
      </Link>
    </RegisterContainer>
  )
}