import { useEffect, useRef, useState } from "react"



export function Login({ onLogin }) {

    const mountedRef = useRef(false)


    
    const [data, setData] = useState({
        username : '',
        password : '',
        remember: false
    })
    
    function handleInputChange(event){
        const name = event.target.name
        const value = event.target.value
        const checked = event.target.checked
        const type = event.target.type


        setData((d) => {
            return {
                ...d,
                [name]: type === 'checkbox' ? checked : value
            }
        })

        
    }

    function handleButtonReset(){
        setData({
            username : '',
            password : '',
            remember: false
        })
    }

    function handleButtonClick(){
        onLogin(data)

    }

    function handleSubmitButton(event){
        event.preventDefault()
        onLogin(data)
    }


    useEffect(()=> {
        if(!mountedRef.current){
            mountedRef.current = true
            console.log("Mounting for the first time")
        } else {
            console.log("Mounting again")
        }
    })




    return (
        <div>
            <form>
                <h1>My Form</h1>
                <input name="username" value={data.username} onChange={handleInputChange} />
                <input name="password" type="password" value={data.password} onChange={handleInputChange} />
                <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange} />
                <button disabled={!data.username || !data.password} onClick={handleButtonClick}>Login</button>
                <button onClick={handleButtonReset}>Reset</button>
                <button onClick={handleSubmitButton} type="submit">Submit</button>
            </form>
        </div>
    )
}