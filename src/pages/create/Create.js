//stylesheet
import './create.css'
import { timeStamp } from '../../firebase/config'
//react hooks
import {useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
//import custom hooks
import {useCollection} from '../../hooks/useCollection'
import { useContextAuth } from '../../hooks/useContextAuth'
import { useFirestore } from '../../hooks/useFirestore'
//react components which need to be installed before imported
import Select from 'react-select'

//category detail option
const categories=[
  {value:'desgin',label:'Desgin'},
  {value:'development',label:'Development'},
  {value:'sales',label:'Sales'},
  {value:'marketing',label:'Marketing'}
]
export default function Create() {
  const[name,setName]=useState('')
  const[description,setDescription]=useState('')
  const[dueDate,setDueDate]=useState('')
  const[category,setCategory]=useState('')
  const[developers,setDevelopers]=useState('')
  const[onlineUsers,setOnlineUsers]=useState([])
  const[formError,setFormError]=useState(null)
  const{user}=useContextAuth()
  const {error, documents} =useCollection('users')
  const {addDocument,deleteDocument,response} = useFirestore('projects')
  const usenav=useNavigate()
  //updating the developers select option, first during component loading and every time there is a change in the use back in the database.
  useEffect(()=>{
  if(documents){

    const usercoll=documents.map(doc=>{
      return {value:doc,label:doc.displayName}
    }
    )
      setOnlineUsers(usercoll)
}
  },[documents])

  //on submit form 
  const handelSubmit= async (e)=>{
   e.preventDefault()
   setFormError(null)
   if(!category)
   {
     setFormError('Please select from category list!')
      return
   }
  if(developers.length < 1)
   {
     setFormError('Please add at least one user!')

   }
   const currentuser={
      id:user.uid,
      displayName:user.displayName,
      photoUrl:user.photoURL

   }
  const assignedDev=
    developers.map(dev=>{
      return {id:dev.value.id,
      displayName:dev.value.displayName,
      photoUrl:dev.value.photoUrl}
    })
  
   
   const projectobj={
      name,
      description,
      category:category.value,
      currentuser,
      dueDate:timeStamp.fromDate(new Date(dueDate)),
      assignedDev
      
    
   }
   console.log(projectobj)

   await addDocument(projectobj)
   if(!response.error){
    usenav('/')
   }else{
     console.log(response.error)
 }
 }
  return (
    <div>
      <h2>Add new Project Detail</h2>
      <form className='form' onSubmit={handelSubmit}>
       <label>
          <span>Project Name:</span>

          <input 
            required
            type='text'
            onChange={(e)=>setName(e.target.value)}
            value={name}
          />
       </label>
       <label>
          <span>Project Description:</span>

          <textarea 
            required
            onChange={(e)=>setDescription(e.target.value)}
            value={description}
            rows={5}
            cols={3}
          />
       </label> 
        <label>
          <span>Due Date:</span>
          <input 
            required
            type='date'
            onChange={(e)=>setDueDate(e.target.value)}
            value={dueDate}
          />
       </label>
        <label>
          <span>Category:</span>
          <Select
            options={categories} 
            onChange={(option)=>setCategory(option)}
            value={category}
          /> 
        </label>
        <label>
          <span>Developers:</span>
          <Select
           options={onlineUsers}
           onChange={option=>setDevelopers(option)}
           isMulti
          />
        </label>
        <button className="btn">Add Project.</button>
      </form>
      {formError && <p className='error'>{formError}</p>}
    </div>
  )
}
