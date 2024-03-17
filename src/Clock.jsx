import { useContext } from "react"
import { LanguageContext } from "./LanguageContext"

export function Clock(){
    const language = useContext(LanguageContext)


    const now = new Date()
    
    return (
        <div>
            <h2>{language === "en" ? "The current time is:" : "L'ora corrente è:"} {now.toLocaleDateString()}</h2>
        </div>
    )
}