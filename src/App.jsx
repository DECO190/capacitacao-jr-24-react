import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Register } from "./pages/register/register"
import { Login } from "./pages/login/login"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" Component={Register}/>
                <Route path="/login" Component={Login}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
