import React, { useState } from "react";
import { Inertia } from '@inertiajs/inertia'
import PageName from "../Components/PageName";
import FormInput from "../Components/FormInput";

const LogIn = () =>{

    const [user,setUser] = useState({
        email:"",
        password:"",
    })
    const handleData = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        Inertia.post('/', user);
    }
    let name,value;
    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) =>{
        name = event.target.name;
        value= event.target.value;
        setUser({...user,[name]:value});
    }
    return(
        <>
            <PageName title="Login Page" />
            <form onSubmit={handleData}>
                <FormInput label="Email Id" name="email" value={user.email} type="email" onChange={handleInput} />
                <FormInput label="Password" name="password" value={user.password} type="password" onChange={handleInput} />

                <button type="submit">Register</button>
            </form>
        </>
    )
}

export default LogIn;