import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const register = async (e) => {
    e.preventDefault();
    let register_url = window.location.origin + "/djangoapp/register";
    
    const res = await fetch(register_url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "userName": userName,
            "password": password,
            "firstName": firstName,
            "lastName": lastName,
            "email": email
        }),
    });
    
    const json = await res.json();
    if (json.status) {
        sessionStorage.setItem('username', json.userName);
        window.location.href = window.location.origin;
    } else {
        alert("The user could not be registered.");
    }
  };

  return (
    <div className="register_container" style={{width: "50%", margin: "auto", marginTop: "5%"}}>
      <div className="header" style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
          <span className="text" style={{fontSize: "35px", fontWeight: "bold"}}>Sign Up</span>
      </div>
      <hr />
      <form onSubmit={register}>
        <div className="inputs" style={{display: "flex", flexDirection: "column", gap: "15px"}}>
          <div className="input">
            <img src="/static/person.png" className="img_icon" alt="Username"/>
            <input type="text" name="username" placeholder="Username" onChange={(e) => setUserName(e.target.value)} required />
          </div>
          <div className="input">
            <img src="/static/person.png" className="img_icon" alt="First Name"/>
            <input type="text" name="first_name" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)} required />
          </div>
          <div className="input">
            <img src="/static/person.png" className="img_icon" alt="Last Name"/>
            <input type="text" name="last_name" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)} required />
          </div>
          <div className="input">
            <img src="/static/email.png" className="img_icon" alt="Email"/>
            <input type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="input">
            <img src="/static/password.png" className="img_icon" alt="Password"/>
            <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
          </div>
        </div>
        <div className="submit_panel" style={{marginTop: "20px"}}>
          <button className="submit" type="submit" style={{padding: "10px 20px", backgroundColor: "darkturquoise", border: "none", cursor: "pointer"}}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
