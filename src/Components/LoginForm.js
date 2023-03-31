import * as React from 'react';
import {useEffect} from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Home from '../Pages/Home';
import Button from '@mui/material/Button';
import Navigation2 from '../Pages/Navigation2'
const credentials = [
  {
    name: "Irfan",
    email: "irfan@gmail.com",
    password: "123456",
    token: 'ajdlasklfksaldkasld'
  },
  {
    name: "Sadia",
    email: "sadia@gmail.com",
    password: "123456",
    token:"asdsad"
  }
]
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()

  const onSubmit = (data) => {
    const { password, email} = data;
    console.log( { password, email});

    const index = credentials.findIndex((user) => user.email === email && user.password === password)
    console.log(index)
    if(index >= 0) {
      console.log(credentials[index])
      localStorage.setItem("token", credentials[ index].token)
      loginHandler()
    }
  };

  const loginHandler=()=>{
    // window.location.assign('/')
    navigate('/')

  }
  return (
    <>
    <Navigation2/>
      <div class="mx-96 mt-36 flex flex-col items-center justify-center rounded-lg border border-slate-300 shadow-2xl  w-2/5 h-2/4">
        {/* <div class="grid grid-cols-1 gap-4"> */}
          {/* <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="Password" variant="outlined" />
          <Button variant="contained">Login</Button>
          <h5>Not Registered?<Button>Register</Button></h5> */}
        <form class="grid grid-cols-1 gap-4" onSubmit={handleSubmit(onSubmit)}>
          
            <div className="form-control">
              <label class="font-mono">Email : </label>
              <input type="text" name="email"
                 class="cursor-pointer border border-zinc-400"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid."
                  }
                })}
              />
              {errors.email && <p class="text-red-600">{errors.email.message}</p>}
            </div>
            <div>
              <label class="font-mono ">Password : </label>
              <input
              class="cursor-pointer border border-zinc-400"
                type="password"
                name="password"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password should be at-least 6 characters."
                  }
                })}
              />
              {errors.password && (
                <p class="text-red-600">{errors.password.message}</p>
              )}
            </div>
            <div class="flex justify-center flex-col ">
              <Button type="submit" disableRipple class="text-cyan-600 rounded-full cursor-grab bg-slate-300">Login</Button>
            </div>
      </form>
      {/* <div>
        <Button>Reh</Button>
      </div> */}

        {/* </div> */}
      </div>
      
    </>
  );
}