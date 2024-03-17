
import { useGithubUser } from "./useGithubUser"
import { useCurrentLocation } from "./useCurrentLocation"

export function GithubUser({username}){
    const [user, setUser] = useGithubUser(username)
    const location = useCurrentLocation()

    return(
        <div>
           {!user && <p>Loading...</p>}
           <h1>{user?.name}</h1>
           <p>{user?.login}</p>
           <img src={user?.avatar_url}></img>
           {location && (
            <div>
                <p>Latitudine: {location.latitude}</p>
                <p>Longitudine: {location.longitude}</p>
            </div>
           )}
        </div>
    )
}