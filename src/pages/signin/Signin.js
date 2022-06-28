import './Signin.css'
import {useState} from 'react'
import { useSignup } from '../../hooks/useSignup'

export default function Signin() {
  const [email, setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [displayname,setDisplayname]=useState('')
  const [thumbnail,setThumbnail]=useState(null)
  const [thumbnailerror,setThumbnailerror]=useState(null)
  const {signup,isPending,error}=useSignup()
 const handelSubmit=(e)=>{
   e.preventDefault()
   signup(email,password,displayname,thumbnail)
   

 } 
  const handelImage =(e)=>{
    setThumbnailerror(null)
    let selected=e.target.files[0];

    console.log(selected)
    if(!selected){
      
      setThumbnailerror('Please choose a picture!')
      return
    }
    if(!selected.type.includes('image')){
      setThumbnailerror('Only picture are allowed')
      return

    }
    
  if(selected.size>200000){
      setThumbnailerror('File size must be less then 100mb')
      return

    }
   setThumbnailerror(null) 
   setThumbnail(selected)
   
   console.log(selected)
  }

  return (
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
       <label >
      
        <span >DisplayName:
          <input type='text'
            onChange={(e)=>setDisplayname(e.target.value)} 
            value={displayname}
            required
          />        
        </span>
      </label>
      <label >
      
        <span > Profile Image:
          <input 
          type='file'
            onChange={handelImage}
            required
          />        
        </span>

        {thumbnailerror && <div className='error'>{thumbnailerror}</div>}
      </label>
     { !isPending && <button className="btn">Sign up!</button>}
      {isPending && <button className="btn" disabled>signing...</button>}
      {error && <div className='error'>{error}</div>}
    </form>
 
    </div>
 
  )
}
