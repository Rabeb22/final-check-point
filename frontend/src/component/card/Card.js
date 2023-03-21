import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { delusers } from "../../redux/actions";
import CardDetails from "./CardDetails";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FcEditImage } from "react-icons/fc";

const Card = ({ user }) => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [show, setShow] = useState(false);
  const { fullName, image, email, phone ,_id} = user;

  return (
    <div className="recipe">
      <h2>{fullName}</h2>
      <img src={image} alt="" />
      
      <button onClick={() => setShow(!show)}>Details</button>
      {show && <CardDetails email={email}  phone={phone} id={_id} />}
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
      <button className="btns" onClick={() => dispatch(delusers(user._id))}><AiFillDelete/></button>
      <button className="btns" onClick={()=>navigate(`/update/${user._id}`)}> <AiFillEdit /></button>

      </div>
      
      
    </div>
  );
};

export default Card;
