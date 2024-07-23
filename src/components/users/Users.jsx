import { useEffect, useState } from "react"


export function Users() {
    let [users, setUsers] = useState([])

    async function getUsers() {
        let options = {
            method: "GET"
        }
    
        let response = await fetch("http://localhost:8000/users", options)
        let json = await response.json()
    
        return json
    }

    useEffect(() => {
        (async () => {
            let usersData = (await getUsers()).users
            setUsers(usersData)
            console.log(usersData)
        })()
    }, [])

    return (
        <div>
            <div>{users.map((value, index) => {
                return <p key={index}>{value.name}</p>
            })}</div>
        </div>
    )
}