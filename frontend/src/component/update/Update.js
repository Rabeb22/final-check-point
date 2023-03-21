import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { editusers } from '../../redux/actions';

const Update = ({ update}) => {
  const {users}=useSelector(state=>state)
  const dispatch=useDispatch()
  const navigate=useNavigate()
    const params=useParams()
    const user=users.find(user=>user._id===params.id)
    // console.log(user)

    const [name, setName] = useState(user.fullName);
    const [email, setEmail] = useState(user.email);
    const [phone, setPhone] = useState(user.phone);
    const [image, setImage] = useState(user.image);

    const onSubmit=(e)=>{
        e.preventDefault();
        const useredit={_id:user._id,fullName:name,email:email,phone:phone,image:image}
        dispatch(editusers(useredit))
        // setName("");setEmail("");setPhone("");setImage("");
        console.log("fullName",name)
        navigate("/")
    }
    
  return (
    <div className="App">
      <h1>Modifier un utilisateur</h1>
      <form onSubmit={onSubmit} className="search-form ">
       
       <h2 className="recipe" style={{color:"white", background:"#40b48e"}}>Donner un nom </h2> <input type="text"  value={name}  onChange={(e)=>setName(e.target.value)} /><br/>
       <h2  className="recipe" style={{color:"white", background:"#40b48e"}}>Donner une adresse email </h2><input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
       <h2  className="recipe" style={{color:"white", background:"#40b48e"}}>Donner un numéro de téléphone </h2><input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
       <h2  className="recipe" style={{color:"white", background:"#40b48e"}}>Donner une photo </h2><input type="text" value={image} onChange={(e)=>setImage(e.target.value)}/>
        {/* <input type="submit" value="EDIT" /> */}
        <div className="recipe" style={{width:'10rem'}}>
        <button className="btns" type="submit"> <AiFillEdit /></button>

        </div>
        
      </form>
      
    </div>
  );
}

export default Update;
