import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import { useForm } from "react-hook-form";

function Signup() {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='flex h-screen items-center justify-center'>
        <div className='w-[600px]'>
                <div className='modal-box'>  
                <form onSubmit={handleSubmit(onSubmit)} action="" method='dialog'>
                        <Link to="/" className='btn btn-sm btn-circle btn-ghost absolute right-2 top-2'>
                            X
                        </Link>                        
                                      
                    {/* Email field start */}
                    <h3 className='font-bold text-lg'>Registration</h3>
                    <div className='mt-4 py-3'>
                            <span>Name</span>
                            <br />
                            <input {...register("name",{required:true})} type="text" placeholder='Enter Your Name' className='w-80 px-3 py-1 border rounded-md outline-none' />
                            <br />
                            {errors.name && <span className='text-sm text-red-500'>Name field is required</span>}
                        </div>

                        {/* <div className='mt-4 py-3'>
                            <span>Phone Number</span>
                            <br />
                            <input type="number" placeholder='Enter Your Phone' className='w-80 px-3 py-1 border rounded-md outline-none' />
                        </div> */}

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
                            <input {...register("password",{required:true})} type="password" placeholder='Enter Your Password' className='w-80 px-3 py-1 border rounded-md outline-none' />
                            <br />
                            {errors.password && <span className='text-sm text-red-500'>Password field is required</span>}
                        </div>
                        {/* button code start */}
                        <div className='flex justify-around mt-4'>
                            <button className='hover:bg-pink-700 duration-200 bg-pink-500 text-white rounded-md px-3 py-1'>SignUp</button>
                            <p>Have Account?{" "}                           
                                     <button
                                      className='underline text-blue-500 cursor-pointer'
                                      onClick={()=>
                                        document.getElementById("my_modal_3").showModal()
                                      }
                                      >                                        
                                        Login
                                    </button>{" "}                               
                                <Login/>
                            </p>
                            
                        </div>
                        </form>
                </div>
                
            </div>
            
    </div>
  )
}

export default Signup
