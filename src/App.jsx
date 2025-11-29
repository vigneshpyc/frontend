import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [year, setYear] = useState("")
  const [section, setSection] = useState("")
  const send_user = async()=>{
    var user_name = document.getElementById("name").value;
    //const res = await axios.post("https://backend-3-um8z.onrender.com/username",{"username" :user_name})
    const res = await axios.post("http://127.0.0.1:8000/username",{"username" :user_name})

    setName(res.data.username)
  }
  const Add_data = async ()=>{
    const datas = {"year":year,
      "section":section
    }
    try{
    const res = await axios.post('http://127.0.0.1:8000/class_data',datas).then(()=>console.log("data Sent successfully")).catch((e)=>console.log("data was not sent",e))
    console.log(res)
    }
    catch(e){
      console.log("Error occured",e)
    }
  }

  return (
    <>
      <input type="text" placeholder='Enter username' id='name'/>
      <h1>{name}</h1>
      <button onClick={send_user}>submit</button>
      <h1>TT Value</h1>
      <input type="text" placeholder='Enter Year' value={year} onChange={(e)=>setYear(e.target.value)} />
      <input type="text" placeholder='Enter section' value={section} onChange={(e)=>setSection(e.target.value)} />
      <button onClick={Add_data}>Add</button>
    </>
  )
}

export default App
