import './Avatar.css'

export default function Avatar({avatar}) {
  return (
    <div className='avatar'>
    <img src={avatar} alt='avatar image'/>
    </div>
  )
}
