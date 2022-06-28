import { useState } from 'react'
import {useLogin} from '../../hooks/useLogin'
import './Login.css'

export default function Login() {
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')
const {login,isPending,error} =useLogin()

const handelSubmit=(e)=>{
  e.preventDefault()
  console.log(email,password)
  login(email,password)
}
return(


    <div>
 <form className='auth-form' onSubmit={handelSubmit}>
       <label >
        <span >Email:
          <input type='email'
            onChange={(e)=>setEmail(e.target.value)} 
            value={email}
            required
          />        
        </span>
      </label>
      <label >
        <span >Password:
          <input type='password'
            onChange={(e)=>setPassword(e.target.value)} 
            value={password}
            required
          />        
        </span>
      </label>
{ !isPending && <button className="btn">Log in!</button>}
      {isPending && <button className="btn" disabled>logging...</button>}
      
     {error && <div className='error'>{error}</div>}
    </form>
    </div>

  )
}
