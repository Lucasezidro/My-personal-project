import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { AuthContext } from "../../context/AuthContext";

export function Form() {
  
  const router = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("") 

  const { signInWithGoogle } = useContext(AuthContext)
  

  async function handleSubmit (e: FormEvent) {
    e.preventDefault()
    
    await api.post('/auth/login').then(res => {
      setEmail(res.data.email)
      setPassword(res.data.password)

    }).catch(error => {
      if (error.response) {
        console.log(error.response)
      }
    })

    if (!email || !password) {
      alert("email e senha são obrigatórios!")

      router('/')
      setEmail("")
      setPassword("")
    } else {
      router("/lucasezidro")
    }

    if (password.length < 6) {
      alert("A senha precisa ter no minimo 6 caracteres")

      router('/')
      setPassword("")
    } else {
      router("/lucasezidro")
    }

  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="" className="title">
        Entrar
      </label>
      <label htmlFor="" className="sub-text">
        Faça seu login para conhecer mais
      </label>

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

      <button onClick={handleSubmit}>
        Entrar
      </button>

      <p>ou</p>

      <button onClick={signInWithGoogle} className="google">
        Autenticar com Google
      </button>

      <span className="not-logged">
        Ainda não possui cadastro ? 
        <a href="/create-user" className="create-user">
           clique aqui!
        </a>
      </span>
    </form>
  );
}
