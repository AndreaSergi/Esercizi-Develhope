import { useState } from "react";

export function UseApi2(){
    const [user, setuser] = useState(null)
    const [userApi, setUserApi] = useState([])


    function fetchButton(){
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(user => {
            setuser(user.results[0])
            setUserApi(prevUserapi => [...prevUserapi, user.results[0]])
        })

        
    }

    const url = 'https://1000-most-common-words.p.rapidapi.com/words/italian?words_limit=33';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b8659c5ef9msh8008238e532aaa0p15b061jsn721fd0f0650d',
		'X-RapidAPI-Host': '1000-most-common-words.p.rapidapi.com'
	}
};

function strano(){
    fetch(url)
    .then(response => response.json())
    .then(console.log(response))
}
strano()




    return (
        <div>
            <ul>
                {userApi.map((user,index)=>(
                    <li key={index}>
                        <p>ID: {user.id.name} </p>
                        <p>NAME {user.name.first}</p>
                    </li>
                ))}
            </ul>

            <button onClick={fetchButton}>click</button>
        </div>
    )
}