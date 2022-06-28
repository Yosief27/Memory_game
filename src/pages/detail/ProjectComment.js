//import states
import { useState } from "react"
import { useContextAuth } from "../../hooks/useContextAuth"
import { timeStamp } from "../../firebase/config"

export default function ProjectComment() {
  const [comment,setComment]=useState(null)
  const handleComment=(e)=>{
      e.preventDefault()
      console.log()

  }
  return (
    <div>
        <form onSubmit={handleComment}>
            <label>
                <span>:Add your comments.</span>
                <textarea 
                onChange={(e)=>{setComment(e.target.value)}}
                value={comment}

                ></textarea>
            </label>

            <button className="btn">Submit</button>
        </form>
    </div>
  )
}
