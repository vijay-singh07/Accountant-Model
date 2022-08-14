import React from 'react'
import { useForm } from '@inertiajs/inertia-react'
import PageName from "../Components/PageName";
import FormInput from "../Components/FormInput";

const Register = () => {

  const { data, setData, post, errors } = useForm({
    fname:'',
    lname:'',
    mail: '',
    phone:'',
    password: '',
  })
  
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    post('/register-user')
  }
  
  return (
    <>
      <PageName title="Register Yourself Here" />
        <form onSubmit={handleSubmit}>

          <FormInput label='First Name' type="text" value={data.fname} name="fname" onChange={e => setData('fname', e.target.value)} />
          <FormInput label='last Name' type="text" value={data.lname} name="lname" onChange={e => setData('lname', e.target.value)} />
          <FormInput label='Email' type="email" value={data.mail} name="mail" onChange={e => setData('mail', e.target.value)} />
          
          <FormInput label='Phone NUmber' type="text" value={data.phone} name="phone" onChange={e => setData('phone', e.target.value)} />
          <FormInput label='Password' type="password" name="fname" value={data.password} onChange={e => setData('password', e.target.value)} />
          
          <button type="submit">Register</button>
        </form>
        <hr/>
        <button type="submit">already a user? Log In!</button>
    </>
  )
  };
 export default Register