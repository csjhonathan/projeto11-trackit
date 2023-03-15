import { RegisterContainer, Logo, RegisterForm, InputRegisterForm, RegisterButton } from "./registerStyles";
import img from "../../constants/img";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../../constants/BASE_URL"
export default function Register() {
  const [register, setRegister] = useState({ email: "", name: "", image: "", password: "" });
  const navigate = useNavigate()
  function handleFormData(e) {
    setRegister({...register, [e.name] : e.value})
  }

  function registerUser(e) {
    e.preventDefault();
    
    axios.post(`${BASE_URL}/auth/sign-up`, register)
      .then(() => {
        console.log("cadastrado com sucesso")
        navigate("/");
      })
      .catch(erro => {
        alert(erro.response.data.message)
      })

  }
  return (
    <RegisterContainer>
      <Logo src={img.logo} />

      <RegisterForm onSubmit={registerUser}>

        <InputRegisterForm
          required
          type="email"
          name="email"
          placeholder="email"

          value = {register.email}
          onChange = {e => handleFormData(e.target)}

          data-test="email-input"
        />

        <InputRegisterForm
          required
          type="password"
          name="password"
          placeholder="senha"

          value = {register.password}
          onChange = {e => handleFormData(e.target)}

          data-test="password-input"
        />

        <InputRegisterForm
          required
          type="name"
          name="name"
          placeholder="nome"

          value = {register.name}
          onChange = {e => handleFormData(e.target)}

          data-test="user-name-input"
        />

        <InputRegisterForm
          required
          type="url"
          name="image"
          placeholder="foto"

          value = {register.image}
          onChange = {e => handleFormData(e.target)}

          data-test="user-image-input"
        />

        <RegisterButton type="submit" data-test="signup-btn">
          Cadatrar
        </RegisterButton>

      </RegisterForm>

      <Link to="/" data-test="login-link">
        Já tem uma conta? Faça login!
      </Link>
    </RegisterContainer>
  )
}