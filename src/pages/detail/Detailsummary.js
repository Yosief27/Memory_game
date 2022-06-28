//style
import './Detail.css'
//components
import Avatar from '../../components/Avatar'
export default function Detailsummary({project}){
    return(
        <div className='project-summary'>
            <h3 className='project-title'>{project.name}</h3>
            <p className='project-des'>{project.description}</p>
            <p className='project-duedate'>{project.dueDate.toDate().toDateString()}</p>
          
            
            <div className='project-dev'>
            <h3 >project Developers:</h3> 
            
                {project.assignedDev.map(user=>(
                <div><Avatar avatar={user.photoUrl} /></div>
                 ))}



            </div>
        </div>
        
    )

}