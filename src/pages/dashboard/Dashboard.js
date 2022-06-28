import './Dashboard.css'
import React from 'react'
//import custom hooks
import { useCollection } from '../../hooks/useCollection'
import Projectlist from '../../components/Projectlist'
export default function Dashboard() {
const {documents,error} =useCollection('projects')


  return (

    <div>
      <h2>List of on Going Projects.</h2>
      {error && <p className='error'>{error}</p>}         
      {documents && <Projectlist projects={documents}/>}
    </div>
  )
}

