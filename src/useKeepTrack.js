import { useState } from 'react'

export function useKeepTrack(){
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")


    function getUsername(e){
        e.preventDefault()
        setUsername(e.target.value)
    }

    function getPassword(e){
        e.preventDefault()
        setPassword(e.target.value)
    }


    return {
        username: username,
        password: password,
        getUsername: getUsername,
        getPassword: getPassword
    }
}



