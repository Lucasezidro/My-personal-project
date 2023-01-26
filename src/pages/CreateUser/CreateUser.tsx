import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "../../components/Header";
import { api } from "../../lib/axios";
import { AuthContext } from "../../context/AuthContext";

export function CreateUser() {
    const router = useNavigate()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("") 
    const [confirmPassword, setConfirmPassword] = useState("") 

    const { signInWithGoogle } = useContext(AuthContext)

    async function handleSubmitCreateUser(e: FormEvent) {
        e.preventDefault()

        if (name || email || password) {
            return
        }

        await api.post('/auth/register').then(res => {
            setEmail(res.data.email)
            setPassword(res.data.password)
      
          }).catch(error => {
            if (error.response) {
              console.log(error.response)
            }
          })

        router('/lucasezidro')
    }

    function handleCreateUser() {
        if (!name || !email || !password) {
            alert("Ops! Parece que você não preencheu um dos campos!")
        }

        if (password !== confirmPassword) {
            alert("As senhas precisam ser iguais")
        }

        if (password.length < 6) {
            alert("A senha precisa ter no minimo 6 caracteres")
          }
    }

  return (
    <Container>
        <Header
            title="Para saber mais, crie a sua conta!"
            showBackHomeButton
        />

        <form onSubmit={handleSubmitCreateUser}>
        <label htmlFor="" className="title">
            Criar Conta
        </label>
        <label htmlFor="" className="sub-text">
            Digite seus dados para criar sua conta
        </label>

        <input
            type="text"
            placeholder="Digite o seu nome"
            className="name"
            value={name}
            onChange={(e: any) => setName(e.target.value)}
        />

        <input
            type="text"
            placeholder="Digite o seu email"
            className="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
        />

        <input
            type="password"
            placeholder="Digite a sua senha"
            className="senha"
            value={password}
            onChange={(e: any) => setPassword(e.target.value)}
        />

        <input
            type="password"
            placeholder="Confirme a senha"
            className="confirmPassword"
            value={confirmPassword}
            onChange={(e: any) => setConfirmPassword(e.target.value)}
        />

        <button onClick={handleCreateUser}>Entrar</button>

        <p>ou</p>

        <button 
            className="google"
            onClick={signInWithGoogle}
        >
            Criar conta com Google
        </button>
        </form>
    </Container>
  );
}
