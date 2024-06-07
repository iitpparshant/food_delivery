import React, { useState } from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

export default function SignUp() {

    const [credentials, setCredentials] = useState({name:"", email:"", password:"", geolocation:""})

    const OnChange = (e) => {
        // const { name, value } = e.target;
        setCredentials({...credentials,[e.target.name]:e.target.value});
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response =await fetch("http://localhost:5000/api/createuser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
        });
        const json= await response.json()
        console.log(json)
        if(!json.success){
            alert("Enter Valid Credentials")
        }
    }


    return (
        <div className="container">
            <h2>Sign Up</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="name" value={credentials.name} onChange={OnChange} />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" value={credentials.email} onChange={OnChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={credentials.password} onChange={OnChange}/>
                </label>
                <label>
                    Address:
                    <input type="text" name="geolocation" value={credentials.geolocation} onChange={OnChange} />
                </label>
                <button type="submit" className="button">Sign Up</button>
                <Link to="/login">Already a user</Link>
            </form>
        </div>
    )
}
