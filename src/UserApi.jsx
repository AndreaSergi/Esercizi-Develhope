import { useState } from "react"

export function UserApi(){
    const [user, setUser] = useState(null)
    const [apiDataList, setApiDataList] = useState([])


    function fetchUser(){

        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(user => {
            setUser(user.results[0])
            setApiDataList(prevList => [...prevList, user.results[0]])

            
            console.log(user.results[0])
        })
    }



    return (
        <div>
            <ul>
                {apiDataList.map((user, index) =>(
                    user.id.name.trim() !== "" &&
                        <li key= {index}>
                            <p>ID: {user.id.name}</p>
                            <p>NAME: {user.name.first}</p>
                            <p>Email: {user.email}</p>
                        </li>
                        
                    
                    ))}
                    <button onClick={fetchUser}>asdasd</button>
            </ul>
        </div>
    )
}
