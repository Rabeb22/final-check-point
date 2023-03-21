import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../../App.css';
import { addusers } from '../../redux/actions';
import { FcAddDatabase, FcHome } from "react-icons/fc";
import { MdAddBox } from "react-icons/md";

const Ajout = ({addUser}) => {
  const navigate=useNavigate()
const dispatch=useDispatch()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState("");

    const onSubmit=(e)=>{
        e.preventDefault();
        dispatch(addusers({fullName:name,email:email,phone:phone,image:image}))
        setName("");setEmail("");setPhone("");setImage("");
       
    }
    
  return (
    <div className="App">
      <h1>Ajouter un utilisateur</h1>
      <form onSubmit={onSubmit} className="search-form ">
       
       <h2 className="recipe" style={{color:"white", background:"#40b48e"}}>Donner un nom </h2> <input type="text"  value={name}  onChange={(e)=>setName(e.target.value)} /><br/>
       <h2  className="recipe" style={{color:"white", background:"#40b48e"}}>Donner une adresse email </h2><input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <h2  className="recipe" style={{color:"white", background:"#40b48e"}}>Donner un numéro de téléphone </h2><input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
       <h2  className="recipe" style={{color:"white", background:"#40b48e"}}>Donner une photo </h2><input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
        
        <div className="recipe" style={{display:"flex", flexDirection:'row', justifyContent:"space-evenly"}}>
        {/* <input type="submit" value={<FcAddDatabase/>} /> */}
        <button className="btns" type="submit" >{" "}<MdAddBox/>{" "}</button>
      <button className="btns" onClick={()=> navigate("/")} >{" "}<FcHome/>{" "}</button>
      </div>
      </form>
      
    </div>
  );
  
}

export default Ajout;
