import {useState, useReducer } from "react";
import {loginApi} from './loginApi'
//reducer function
const reducerfun=(state=initialstate,action)=>{
    switch(action.type){
        case 'field':
            return{...state,[action.field]:action.value}
        case 'isloading':
            return {...state,isloading:true}; 
        case 'login':
            return {...state,login:true}
        case 'logout':
          return{...state,username:'',password:'',login:false} 
        case 'error':
            return{...state,error:'please check username or password!'}
        default:
            break;
            
    }
 return state; 
}

const initialstate={
    username:'',
    password:'',
    isloading:false,
    login:false,
    error:'',
};
export default function Loginreducer() {

  const [state,dispatch]=useReducer(reducerfun,initialstate)  
  const {username,password,isloading,login,error}=state;
  const handlelogin=async(e)=>{
      e.preventDefault()
      dispatch({type:'isloading'})
    try{
        await loginApi({username,password})
        dispatch({type:'login'})
        console.log('welocom', username)

    }catch(err){
        dispatch({type:'error'})
        console.log(err)
    }
      
  }
  
  return (
    <div>
        {login ?(<>
            <h2>hi <em>{username}</em> welcome to my reducer</h2>
            <button onClick={dispatch({type:'logout'})}>logout</button>
        </>):(
                        
        <form onSubmit={handlelogin}>
            <h2>welcome to my usereducer lab</h2>
            

            {error && <h3>{error}</h3>}
            <label>
                <span>username:</span>
                <input
                    type='text'
                    onChange={e=>dispatch({action:'field'})}
                    value={username}

                />
            </label>
             <label>
                <span>password:</span>
                <input
                    type='password'
                    onChange={e=>dispatch({action:'field',field:'password',value:e.currentTarget.value})}
                    value={password}

                />
            </label>
            <button >Login</button>
 
        </form>
 
 
        )

       
        }
   </div>

  )
}
