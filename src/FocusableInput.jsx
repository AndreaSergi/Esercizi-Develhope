import { useEffect, useRef } from "react"

export function FocusableInput(){
const usernameRef = useRef(null)

    useEffect(()=> {
        usernameRef.current?.focus()

    }, [])



    return (
        <div>
            <h2>Focusable</h2>
            <form>
                <input ref={usernameRef} name= "username" type="text" />
                <input name= "password" type="password" id="" />
                <button>click</button>
            </form>
        </div>
    )
}