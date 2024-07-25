import "./register.css"
import dogImage from "../../assets/dog.png"
import { useState } from "react"

export function Register() {
    let [registerInfos, setRegisterInfos] = useState({
        name: "",
        email: "",
        password: ""
    })

    let [repeatPassword, setRepeatPassword] = useState("")

    return (
        <div className="register-main-container">
            <img src={dogImage} alt="" />

            <p>
                {JSON.stringify(registerInfos, null, 2)}
            </p>

            <input placeholder="Nome" onChange={(ev) => {
                setRegisterInfos(prev => {
                    return {...prev, name: ev.target.value}
                })
            }}/>
            <input placeholder="Email" />
            <input placeholder="Senha" />
            <input placeholder="Repetir senha" />

            <button>Registrar</button>

        </div>
    )
}