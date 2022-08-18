import React  from 'react'

import { Inertia } from '@inertiajs/inertia';
import FormInput from '../Components/FormInput';
import PageName from '../Components/PageName'
import { useForm } from '@inertiajs/inertia-react'




const Register = () => {
    const { data, setData, post, errors } = useForm({
        fname:'',
        lname:'',
        mail: '',
        phone:'',
        password: '',
        password_confirmation:'',
    })
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
      
        post('register-user')
        
    }
    const handleClick = function handleClick() {
      Inertia.get('login');
    };
    
    return (
      <div className="bg-slate-100">
        <PageName title="Register Yourself Here" />
          <form onSubmit={handleSubmit} className="mx-80 border-2 border-gray-200 bg-purple-200" >
  
            <FormInput label='First Name*' type="text" value={data.fname} name="fname" onChange={e => setData('fname', e.target.value)} />
            {errors.fname && <div>{errors.fname}</div>}
            <FormInput label='last Name*' type="text" value={data.lname} name="lname" onChange={e => setData('lname', e.target.value)} />
            {errors.lname && <div>{errors.lname}</div>}
            <FormInput label='Email*' type="email" value={data.mail} name="mail" onChange={e => setData('mail', e.target.value)} />
            {errors.mail && <div>{errors.mail}</div>}
            <FormInput label='Phone NUmber*' type="text" value={data.phone} name="phone" onChange={e => setData('phone', e.target.value)} />
            {errors.phone && <div>{errors.phone}</div>}
            <FormInput label='Password*' type="password" name="password" value={data.password} onChange={e => setData('password', e.target.value)} />
            {errors.password && <div>{errors.password}</div>}
            <FormInput label='Confirm Password*' type="password" name="password_confirmation" value={data.password_confirmation} onChange={e => setData('password_confirmation', e.target.value)} />
            {errors.password_confirmation && <div>{errors.password_confirmation}</div>}
            <button type="submit" className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white ml-10 px-4 mb-3 border border-blue-500 hover:border-transparent rounded">Register</button>
          </form>
          
          <div className="ml-80">
          Alreadya user? <button onClick={handleClick} className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded">login here</button>
          </div>
      </div>
    )
}

export default Register

    
  
  