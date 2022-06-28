import { useState, useEffect } from 'react'
import { projectAuth ,projectStorage,projectFirestore} from '../firebase/config'
import { useContextAuth } from './useContextAuth'

export const useSignup = () => {
  const [isCancelled, setIsCancelled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useContextAuth()
  

  const signup = async (email, password, displayName,thumbnail) => {
    setError(null)
    setIsPending(true)
  
    try {
      // signup
      const res = await projectAuth.createUserWithEmailAndPassword(email, password)

      if (!res) {
        throw new Error('Could not complete signup')
      }
      // the updateProfile function take many arrgument related to the user after once created
      //like displayname and photoURL,where we can update the user attributes
      //first we need to create a path to the image to be store inside the firebase/storage 
      const photoURL=`thumbnail/${res.user.uid}/${thumbnail.name}`
      const img=await projectStorage.ref(photoURL).put(thumbnail)
      const imgURL=await img.ref.getDownloadURL()
      await res.user.updateProfile({ displayName,photoURL:imgURL }) 
      //create users document in   firebasestore to access for later use
      await projectFirestore.collection('users').doc(res.user.uid)
      .set({
        online:true,
        displayName,
        photoUrl:imgURL


      })
       
      


      
      // dispatch login action
      dispatch({ type: 'LOGIN', payload: res.user })
      console.log(res.user)

      if (!isCancelled) {
        setIsPending(false)
        setError(null)
      }
    } 
    catch(err) {
      if (!isCancelled) {
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCancelled(true)
  }, [])

  return { signup, error, isPending }
}