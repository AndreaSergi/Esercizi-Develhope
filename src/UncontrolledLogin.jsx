import React from "react";

export function UncontrolledLogin({ onLogin }) {
    function handleSubmit(event) {
        event.preventDefault();


        const formData = new FormData(event.target);


        const username = formData.get('username');
        const password = formData.get('password');
        const remember = formData.get('remember') === 'on' ? true : false;

        const data = {
            username,
            password,
            remember
        };
        onLogin(data);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>My uncontrolled Form</h1>
                <input name="username" placeholder="Username" />
                <input name="password" type="password" placeholder="Password" />
                <input name="remember" type="checkbox" />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
