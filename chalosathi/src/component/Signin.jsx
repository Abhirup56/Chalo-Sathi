import React from 'react'
import { useForm } from "react-hook-form";
function Signin() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <>
    
      <div className='flex h-screen items-center justify-center flex-col relative bottom-5 '>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-3 px-8 py-4 rounded-lg border border-white' >
          <h1 className='text-3xl text-Blue font-dance mb-7'>
              Sign In
          </h1>
              <div className='space-y-4'>
              <label className="input input-bordered input-primary flex items-center gap-2 ">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Username" {...register("user", { required: true })}/>
              </label>
              {errors.user && <span className='text-red-500 italic text-sm'>** This field is required **</span>}

              <label className="input input-bordered input-primary flex items-center gap-2 ">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                  d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path
                  d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" {...register("email", { required: true })}/>
              </label>
              {errors.email && <span className='text-red-500 italic text-sm'>** This field is required **</span>}
              
              
              <label className="input input-bordered flex input-primary items-center gap-2">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input type="password" className="grow" placeholder="password" {...register("pass", { required: true })}/>
              </label>
              {errors.pass && <span className='text-red-500 italic text-sm'>** This field is required **</span>}

              <label className="input input-bordered flex input-primary items-center gap-2">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70">
                  <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd" />
              </svg>
              <input
                    type="password"
                    className="grow"
                    placeholder="Confirm password"
                    {...register("confirmPassword", {
                        required: "This field is required",
                        validate: (value) => value === watch("pass") || "Passwords do not match",
                    })}
                    />
              </label>
              {errors.confirmPassword && <span className='text-red-500 italic text-sm'>{errors.confirmPassword.message}</span>}

              </div>
              <button className='btn btn-info text-White w-full py-2 rounded-md '>Sign In</button>
              <hr />
              <p className='text-sm'>Already have an account ? <a href="/login" className='text-Blue underline'>Login</a>
              </p>
          </form>
      </div>

    </>
  )
}

export default Signin