import { useState, useEffect } from "react";

export function useGithubUser(username){
    const [user, setUser] = useState(null);

    useEffect(()=> {
        if(!username){
            return;
        }

        fetch(`https://api.github.com/users/${username}`)
            .then(response => response.json())
            .then(user => {
                setUser(user);
            });

    }, [username]);

    return [user, setUser];
}
