import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import { Register } from "./pages/register/register"

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/register" Component={Register}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
