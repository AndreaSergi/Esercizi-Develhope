import { useState } from "react";
import { Welcome } from "./Welcome";

export function InteractiveWelcome(){

    const [name, setName] = useState('');

    function handleNameInputChange(event) {
        setName(event.target.value)
    }

    return (
        <div>
                <input
                    type='text'
                    value= {name} 
                    onChange={handleNameInputChange}
                />
                <Welcome name = {name} />
        </div>
    )
}