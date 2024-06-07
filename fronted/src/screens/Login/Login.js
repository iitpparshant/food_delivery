import React, { useState } from 'react'
import { Link,useNavigate} from 'react-router-dom';


export default function Login() {

  const [credentials, setCredentials] = useState({email:"", password:""})
  let navigate= useNavigate()

    const OnChange = (e) => {
        // const { name, value } = e.target;
        setCredentials({...credentials,[e.target.name]:e.target.value});
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        const response =await fetch("https://food-delivery-kohl-kappa.vercel.app/api/loginuser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})
        });
        const json= await response.json();
        console.log(json)
        if(!json.success){
            alert("Enter Valid Credentials")
        }
        if(json.success){
          localStorage.setItem("userEmail",credentials.email);
          localStorage.setItem("authToken",json.authToken);
          console.log(localStorage.getItem("authToken"),localStorage.getItem("userEmail"))
          navigate("/");
        }
    }


  return (
    <div className="container">
            <h2>Login</h2>
            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" value={credentials.email} onChange={OnChange} />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" value={credentials.password} onChange={OnChange}/>
                </label>
                <button type="submit" className="button">Login</button>
                <Link to="/createuser">New user</Link>
            </form>
        </div>
  )
}
