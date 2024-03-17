import { Color } from "./Color"

export function Colors({colors}){

    return (
        <ul>
            {colors.map((color, index) => (
                <Color key={index} color={color}/>
            ))}
        </ul>
    )
}