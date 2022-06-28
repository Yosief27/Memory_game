import './Detail.css'
//import custom hooks
import { useDocument } from '../../hooks/useDocument'
//import useParam to extract id form the url
import {useParams} from 'react-router-dom'
import Detailsummary from './Detailsummary'
export default function Detail() {
  const {id}=useParams()
  const {document, error }=useDocument('projects',id)
  if(error){
    return <div className='error'>{error}</div>
  }
  if(!document){
    return<div>loading....</div>
  }
  return (
    <div className='project-details'>
      <Detailsummary project={document}/>
      <div>comments</div>
    </div>
   

  )
}
