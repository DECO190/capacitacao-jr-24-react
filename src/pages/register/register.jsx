import "./register.css"
import dogImage from "../../assets/dog.png"
import { useState } from "react"
import { registerUserApi } from "./api/register-user-api"
import { useNavigate } from "react-router-dom"

export function Register() {
    let [registerInfos, setRegisterInfos] = useState({
        name: "",
        email: "",
        password: ""
    })

    let [repeatPassword, setRepeatPassword] = useState("")
    let navigate = useNavigate()

    const registerUser = async () => {
        for (let k in registerInfos) {
            if (!registerInfos[k]) {
                return
            }
        }

        if (registerInfos.password != repeatPassword) {
            return 
        }

        let {response, data} = await registerUserApi(registerInfos)

        if (response.ok) {
            console.log("USER CADASTRADO COM SUCESSO!")
            navigate("/users")
        }
    }

    return (
        <div className="register-main-container">
            <img src={dogImage} alt="" />

            <p>
                {JSON.stringify(registerInfos, null, 2)}
            </p>

            <input placeholder="Nome" onChange={(ev) => setRegisterInfos(prev => ({...prev, name: ev.target.value}))} />
            <input placeholder="Email" onChange={(ev) => setRegisterInfos(prev => ({...prev, email: ev.target.value}))} />
            <input placeholder="Senha" onChange={(ev) => setRegisterInfos(prev => ({...prev, password: ev.target.value}))} />
            <input placeholder="Repetir senha" onChange={(ev) => setRepeatPassword(ev.target.value)} />

            <button onClick={() => registerUser()}>Registrar</button>
        </div>
    )
}