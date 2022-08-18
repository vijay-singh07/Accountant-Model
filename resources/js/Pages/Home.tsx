import React from 'react'
import { Inertia } from '@inertiajs/inertia';


const Home = () => {
  const handleClick = function handleClick() {
    Inertia.get('register');
  };
  const onClick = function handleClick() {
    Inertia.get('login');
  };
return (
  <>
    <div className="bg-purple-200">
      <div className="text-x4 text-center font-bold bg-slate-100">
      Welcome to HomePage.
      </div>
      <hr/>
      <div className="py-5 ">
      Click here to <button onClick={handleClick} type="submit" className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white  px-4 border border-blue-500 hover:border-transparent rounded">Register</button>
      </div>
      <hr/>
      <div className="py-5">
      Click here to <button onClick={onClick} type="submit" className="bg-white hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded">Login</button>
      </div>
      
    </div>
  </>
)
};

export default Home;