// style
import './OnlineUser.css'
//hooks
import { useCollection } from '../hooks/useCollection'
//component
import Avatar from './Avatar'
export default function OnlineUser() {
    const {documents,error}=useCollection('users')

  return (
    <div className='online-users'>
        <h2>All Users List</h2>
        {error && <div>{error}</div>}
        {documents && documents.map(doc=>(
            <div key={doc.id} className='user-item'>
                {doc.online && <span className='active-user'></span>}
                <span>{doc.displayName}</span>
                <Avatar avatar={doc.photoUrl}/>

            </div>
        ))}

    </div>
  )
}
