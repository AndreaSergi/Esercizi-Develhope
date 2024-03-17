import { useState } from 'react'
import {useKeepTrack} from './useKeepTrack'

export function ControlledFormHook2(){
    const {username, password, getUsername, getPassword} = useKeepTrack('');

    const [name, setName] = useState('')
    const [pass, setPass] = useState('')

    function onSubmit(event){
        event.preventDefault()
        console.log(username,password)
    }

    function setValues(){
        setName(username);
        setPass(password)
    }

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="username" type="text" value={username} onChange={getUsername}/>
                <input name="password" type="text" value={password} onChange={getPassword}/>
                <button onClick={setValues}>Submit</button>
            </form>
            <p>username: {name}</p>
            <p>password: {pass}</p>
        </div>
    )
}