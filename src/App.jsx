


import React,{useState} from "react"
import ImageUtil from "./Components/ImageUtil"
import Login from "./Components/Login"
import MessageModal from "./Components/MessageModal"


function App() {
  
const [onSuccess,setOnSuccess]= useState(false)
const [message,setMessage] = useState(' ')




  return (
   <main className="main-container">
    <Login  setOnSuccess={setOnSuccess}  setMessage={setMessage} />
    <ImageUtil/>
    {
      onSuccess && <MessageModal onSuccess={onSuccess} setOnSuccess={setOnSuccess} message={message} setMessage={setMessage}/>
    }
  </main>
  )
}

export default App
