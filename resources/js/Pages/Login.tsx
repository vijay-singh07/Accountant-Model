import React from "react";
import { Inertia } from '@inertiajs/inertia';
import { useForm } from '@inertiajs/inertia-react'
import PageName from "../Components/PageName";
import FormInput from "../Components/FormInput";

const Login = () =>{

    const { data, setData, post, errors } = useForm({
        mail: '',
        password: '',
    })
    const handleData = (event: React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        post('login-user');
    }

    var handleClick = function handleClick() {
        Inertia.get('register');
      };
   
    return(
        <div className="bg-slate-100">
            <PageName title="Login Page" />
            <form onSubmit={handleData} className="mx-80 border-2 border-gray-200 bg-purple-200" >
                <FormInput label="Email Id*" name="mail" value={data.mail} type="email" onChange={e => setData('mail', e.target.value)} />
                {errors.mail && <div>{errors.mail}</div>}
                <FormInput label="Password*" name="password" value={data.password} type="password" onChange={e => setData('password', e.target.value)} />
                {errors.password && <div>{errors.password}</div>}
                <button type="submit" className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white ml-10 px-4 mb-3 border border-blue-500 hover:border-transparent rounded">Login</button>
            </form>
            <br/>
            <div className="ml-80">
            Not a user? <button onClick={handleClick} className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded">Register here</button>
            </div>
        </div>
    )
}

export default Login;