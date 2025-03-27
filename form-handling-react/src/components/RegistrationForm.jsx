import { useState } from "react";

function RegistrationFform(){
    const[formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const{ username, email, password } = formData;
        
        if(!username || !email || !password){
            alert("Please fill in all fileds")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">username:</label>
            <input type="text" placeholder="username" onChange={(e) => setFormData({...formData, username: e.target.value })}/><br />
            <label htmlFor="email">Email:</label>
            <input type="email" placeholder="name@example.com" onChange={(e) => setFormData({...formData, email: e.target.value})}/><br />
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="password" onChange={(e) => setFormData({...formData, password: e.target.value})}/>
            <button>Submit</button>
        </form>
    )
}

export default RegistrationFform