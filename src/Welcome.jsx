
export function Welcome({name}){
    if(name) {
        return (
            <div className="welcome">
                <p>Ciao! {name}</p>
            </div>
        )
    } else {
        return null;
    }
}