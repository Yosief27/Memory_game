//import css and images
import Temple from '../assets/temple.svg'
import './Navbar.css'
import {useLogout}  from '../hooks/useLogout'
import { useContextAuth}   from '../hooks/useContextAuth';

//import from react dom 
import {Link} from 'react-router-dom'
export default function Navbar() {
    const {user} =useContextAuth()
    const {logout,isPending} =useLogout()
  return (
    <div className='navbar'>
        <ul>
            <li className='logo'>
                <img src={Temple} alt='icon'/>
                <span><Link to='/'><strong>My Projects</strong></Link></span>
            </li>
            {!user && (
                <>
                <li>
                <Link to='/login'>Login</Link>
                </li>
                 <li>
                <Link to='/signin'>Signin</Link>
                </li>
                </>
                           

            )}
            {user && (
                <>
                   {!isPending && (<> <li>hello,{user.displayName}</li><li> 
                <button className='btn' onClick={logout}>Logout</button>                
            </li>
            </>)}
            {isPending && <li>
                <button className='btn' disabled>logging out...</button>                
            </li>
            } 


                </>
             
            )}
             
           
             

        </ul>
    </div>
  )
}
