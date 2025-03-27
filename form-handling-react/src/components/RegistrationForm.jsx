import { useState } from "react";

function RegistrationFform(){

    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!username){
            alert("Please fill the username filed")
        };
        if(!email){
            alert("Please fill the email filed")
        };
        if(!password){
            alert("Please fill the password filed")
        };
    };

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">username:</label>
            <input type="text" value={username} placeholder="username" onChange={(e) => setUsername(e.target.value)}/><br />
            <label htmlFor="email">Email:</label>
            <input type="email" value={email} placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)}/><br />
            <label htmlFor="password">Password:</label>
            <input type="password"  value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)}/>
            <button>Submit</button>
        </form>
    )
}

export default RegistrationFform