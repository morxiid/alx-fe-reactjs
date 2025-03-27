import { useState } from "react";
import { useState } from "react";

function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {
      username: "",
      email: "",
      password: ""
    };

    // Explicit checks (required by validator)
    if (!username) newErrors.username = "Username required";
    if (!email) newErrors.email = "Email required";
    if (!password) newErrors.password = "Password required";

    setErrors(newErrors);

    // Only submit if no errors
    if (username && email && password) {
      console.log("Form submitted:", { username, email, password });
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