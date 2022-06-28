//import css
import './Projectlist.css'

//import component
import {Link } from 'react-router-dom'
import Avatar from './Avatar'

export default function Projectlist({projects}) {
  return (
    <div>
        {projects.lenght===0 && <p className='error'>No project to display!</p>}
        <div className='project-list'>
            {projects.map(project=>(
            <Link  to={`projects/${project.id}`}className='project-detail'key={project.id}>
                <h3>{project.name}</h3>
                <p>{project.dueDate.toDate().toDateString()}</p>
                <ul className='project-dev'>
                  {project.assignedDev.map(dev=>(
                    <li key={dev.photoUrl}><Avatar avatar={dev.photoUrl} /></li>
                  ))}
                </ul>

            </Link>
        ))}
 
        </div>
   </div>
  )
}
