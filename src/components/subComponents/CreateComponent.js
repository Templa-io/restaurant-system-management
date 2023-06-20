import React, { useState } from 'react'
import './CreateComponent.css'
import image1 from '../../assets/gallery.png'





const CreateComponent = () => {

  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [fields, setFields] = useState(false)
  const [alertStatus, setAlertStatus] = useState("danger")
  const [msg, setMsg] = useState(null)
  const [title, setTitle] = useState("")

  


  return (
    <div className='Order-details'>
    {fields && (
      <p className={`w-full p-2 rounded-lg text-center text-lg font-semibold 
      ${alertStatus === "danger"
      ? "bg-red-500 text-red-800"
      : "bg-emerald-400 text-emerald-800"
    }` }>
      {msg}
      </p>
    )}

    <div>Create Menu.</div>
    <form>
    <div>
     <div className='label' > Name</div>
    <input 
    type="text" 
    required 
    value={title} 
    onChange={(e => setTitle(e.target.value))} 
    className='custom-input'/>
    </div>
    <div>
     <div className='label'>Description </div>
    <textarea typeof='text' 
    rows={4} cols={40} 
    required  
    value={description}
     onChange={(e) => setDescription(e.target.value
      )}/>
    </div>
    <div>
    <div className='label'> Price </div>
    <input 
    type="text" 
    required 
    value={price}
     onChange={(e) => setPrice(e.target.value)} 
     className='custom-input'/>
    </div>
    <div><label className='label'> Image </label></div>
   <div className='img-box'>
  
    <div className='w-full flex flex-col items-center justify-center cursor-pointer'>
    <div className='w-full h-full flex flex-col items-center' >
    <img src={image1} alt='' width="20px"/>
    <div>Attach an image </div>
    </div>
    <input className="w-0 h-0"
    type="file"
    name="uploadimage"
    accept="image/*" 
   
    />
    </div>
  
    </div>
  
      
   
   <div className="btn2" >
   <button type="button" className="custom-btn">Create</button>
   </div>

 </form>  

</div>

  )
}

export default CreateComponent