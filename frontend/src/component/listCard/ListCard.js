import React, { useEffect } from 'react';
import Card from '../card/Card';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getusers } from '../../redux/actions';
import Loading from '../loading/Loading'
import { AiFillPlusCircle } from 'react-icons/ai';

const ListCard = () => {
  const {users,loading}=useSelector(state=>state)
  console.log("users...",users)
    const navigate = useNavigate();
    const dispatch=useDispatch()
    useEffect(() => {
     dispatch(getusers())
    }, [])
    
  return (
   
    <div className="App">
   
   { loading? <Loading/>:
   <div className="App">
      <h1>Tous les utilisateurs</h1>
      <div className="recipes">
        {users !== [] &&
          users.map(user=> <Card key={user._id} user={user} />)}
         
      </div>
       <div className="recipe" style={{display:"flex" , flexDirection:"row"}}>
       <h2 style={{right:"10rem"}}>Add users</h2>
      <button className="btns" onClick={()=> navigate("/ajout")} style={{marginLeft:'25rem'}}>{<AiFillPlusCircle/>}</button>
      </div>
      </div>}
    </div>
  );
}

export default ListCard;
