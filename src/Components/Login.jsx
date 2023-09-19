import React,{useState} from 'react'
import {AiFillEye} from 'react-icons/ai'
import {AiFillEyeInvisible} from 'react-icons/ai'

const Login = ({setOnSuccess,setMessage}) => {
  const IMAGES = {
    image1 : new URL('../assets/logo.png', import.meta.url).href
  }
  const [email,SetEmail] = useState('')
  const [paswd,SetPaswd] = useState('')
  const [ click, setClick] = useState(false)

const handleSubmit = (e)=>{
  e.preventDefault()
  setOnSuccess(true)
  if(email && paswd){
    
    setMessage("Authention Successfull")
  }
  else{
    setMessage("Authentication Failed!!")
  }
  SetEmail('')
  SetPaswd('')
}


  return (
    <section className='form-container'>
<div>
<img src={IMAGES.image1} alt="image" />
<h1 className='title'>Welcome to eXp Listings</h1>
</div>
      <form onSubmit={(e)=>handleSubmit(e)} >
<input type="email" name="" id="" placeholder='enter email' onChange={(e)=>SetEmail(e.target.value)} value={email}  />
<div className='passwd-container'>
<input   className={`${click ? 'show':'hide'}`} type={`${!click ? 'password':'text'}`} name="" id="" value={paswd}  onChange={(e)=>SetPaswd(e.target.value)} placeholder='enter password'/>
<div className='passwd'  onClick={()=>setClick(!click)} >

 {
    click ? <AiFillEye/> : <AiFillEyeInvisible/>
} 
  </div>
 

</div>



 

<div>
  <button  type='submit'>Login</button>
{/*   <button type='submit'>Sign Up</button> */}
</div>
<a href='/'>Forgot Password</a>
      </form>
    </section>
  )
}

export default Login