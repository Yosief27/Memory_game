import './Sidebar.css'
import Dashboard from '../assets/dashboard_icon.svg'
import Addicon from '../assets/add_icon.svg'

import {NavLink} from 'react-router-dom'
import { useContextAuth } from '../hooks/useContextAuth'
import Avatar from '../components/Avatar'
export default function Sidebar() {
  const{user} =useContextAuth()
  if(user){
  console.log(user.photoURL)
  }
  return (
    <div className='sidebar'>
        <div className="sidebar-content">
            <div className="user">
                {user && (<>
                 <Avatar avatar={user.photoURL}/>
                <p>Hej {user.displayName}</p>
                </>)}
               
            </div>
            <nav className="links">
                <ul>
                    <li>
                    <NavLink to='/'>
                            <img src={Dashboard} alt="dashboard" /><span>DashBoard</span>
                    </NavLink>
                  </li> 
                </ul>
                <ul>
                    <li>
                        <NavLink to='/create'> 
                            <img src={Addicon} alt="Add icon" /><span>New Project</span>
                        </NavLink>
                    </li>                       
                </ul>
            </nav>
            
        </div>
    </div>
  )
}
