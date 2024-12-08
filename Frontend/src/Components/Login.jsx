import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';


function Login() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = async data => {
    const userInfo = {        
        email: data.email,
        password: data.password,
    };
    await axios
    .post("http://localhost:4001/user/login", userInfo)
    .then((res)=>{
        console.log(res.data)
        if(res.data){
            toast.success('Login Successfully!');            
            document.getElementById("my_modal_3").close();
            setTimeout(() =>{                
                window.location.reload();
                localStorage.setItem("Users", JSON.stringify(res.data.user));
            },1000)            
        }
        
    })
    .catch((error)=>{
        if(error.response){
            console.log(error);            
            toast.error("Error: " + error.response.data.message);
            setTimeout(() =>{},2000);
        }
    });
  }
  return (
    <>
        <div>
            <dialog id='my_modal_3' className='modal'>
                <div className='modal-box'>
                    <form onSubmit={handleSubmit(onSubmit)} action="" method='dialog'>
                        <Link to="/" 
                        className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'
                        onClick={()=> document.getElementById("my_modal_3").close()}
                        >
                            X
                        </Link>                              
                    
                    {/* Email field start */}
                    <h3 className='font-bold text-lg'>Login</h3>
                        <div className='mt-4 py-3'>
                            <span>Email</span>
                            <br />
                            <input {...register("email",{required:true})} type="email" placeholder='Enter Your Email' className='w-80 px-3 py-1 border rounded-md outline-none' />
                            <br />
                            {errors.email && <span className='text-sm text-red-500'>Email field is required</span>}
                        </div>
                            {/* Password fild start */}
                        <div className='mt-4 py-3'>
                            <span>Password</span>
                            <br />
                            <input {...register("password", {required:true})} type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none' />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>Password field is required</span>}
                        </div>
                        {/* button code start */}
                        <div className='flex justify-around mt-4'>
                            <button className='hover:bg-pink-700 duration-200 bg-pink-500 text-white rounded-md px-3 py-1'>Login</button>
                            <p>if you not Registerd?{" "}                           
                                     <Link
                                     to="/signup" className='underline text-blue-500 cursor-pointer'>
                                        
                                        SignUp
                                    </Link>{" "}                              
                                
                            </p>
                        </div>
                        </form>
                </div>
                
            </dialog>
        </div>
    </>
  )
}

export default Login
