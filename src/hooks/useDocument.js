//import standared hooks
import {useState,useEffect} from 'react'
import {projectFirestore} from '../firebase/config'



export const useDocument=(collection,id)=>{
const [document,setDocument]=useState('')
const [error,setError]=useState('')
useEffect(()=>{
    const ref=projectFirestore.collection(collection).doc(id)

    const unsubscribe=ref.onSnapshot((snapshot)=>{
        if(snapshot.data()){
            setDocument({...snapshot.data(), id:snapshot.id})
        }
        else{
            setError('No detail for this project!')
        }

    },(error)=>{
        setError(error.message)

    })
    return ()=>unsubscribe()
    
},[collection,id])
return {document,error}
}

