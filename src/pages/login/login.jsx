import { useState } from "react"
import "./login.css"

export function Login() {
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    return (
        <div className="login-main-container">
            <input type="text" placeholder="Email" onChange={(ev) => setEmail(ev.target.value)}/>
            <input type="text" placeholder="Senha" onChange={(ev) => setPassword(ev.target.value)}/>

            <button>Entrar</button>
        </div>
    )
}