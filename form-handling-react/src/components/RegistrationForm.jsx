import { useState } from "react";

function RegistrationFform(){

    const[username, setUsername] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const [errors, setErrors] = useState({
        username: "",
        email: "",
        password: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        let hasErrors = false;
        const newErrors = {
            username: "",
            email: "",
            password: ""
        };

        if(!username){
            newErrors.username = "Please fill the username field";
            hasErrors = true;
        };
        if(!email){
            newErrors.email = "Please fill the email field";
            hasErrors = true;
        };
        if(!password){
            newErrors.password = "Please fill the password field";
            hasErrors = true;
        };

        setErrors(newErrors);

        if(!hasErrors){
            console.log("Form submitted:", { username, email, password });
            // Submit your form here
            alert("Registration successful!");
        }
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