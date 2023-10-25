import React from 'react';
import {useForm} from 'react-hook-form';
import Input from '../input';
import Button from '../button';

function LoginPage() {
    const {register, handleSubmit, reset, formState: {errors}} = useForm()
  
  const submit = (data:any)=> {
    console.log(data);
    reset
  }
    return (
    <div className='flex w-full'>
        <div className='bg-[#032D7C] w-1/2 h-[100vh]  '>
            <img className='w-[50%] mt-[6rem] ml-[8rem] '
            src="/src/assets/loginImage.png" alt="man on computer"/>    
        </div>
        
        <div className='bg-[#EEEEEE] w-1/2'>
            <div className='w-1/5 p-2 '>
                <img
                src="/src/assets/logo.jpg" alt="Logo" />
            </div>
           
            <div className='flex flex-col justify-center mt-[7rem] ml-[12rem] w-[50%]' >
                <div className='pb-3'>
                    <h1 className='pb-1 text-xl font-bold'>Hello there!</h1>
                    <p className='pb-1 text-[0.7rem]'>Welcome back</p>
                </div>
                <form onSubmit={handleSubmit(submit)}>
                   <Input 
                    label='Email'
                    placeholder='Enter your email'
                    register={register}
                    name='email'
                    validator={{required: true, pattern: /^\S+@\S+$/i  }}
                    type='email'
                    />
                    {errors.email && <p>PLease enter email</p>}
                    <Input 
                    label='Password'
                    placeholder='Enter your password'
                    register={register}
                    name='password'
                    validator={{required: true}}
                    type='password'
                   />
                    {errors.email && <p>PLease enter password</p>}

                    <div className=''>
                    <Button width='text-white py-[0.7rem] w-full bg-[#032D7C]'
                        type='submit'
                        label='Login'/>
                    </div>
                        <p className='self-end text-right pt-4 text-[#032D7C]'>Forget Password?</p>
                </form>
                <div className='text-center mt-[3rem]'>
                    <p className=' text-[#032D7C] '>No account yet? <span className='text-[#FF3C5F]'>Register</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginPage