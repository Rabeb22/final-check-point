import axios from "axios"
import { ADD_USERS, DEL_USERS, EDIT_USERS, GET_USERS } from "./actionTypes"



export const getusers = () => async (dispatch) =>{
   try {
    const response=await axios.get('/get');
//    console.log("res ",response.data);
   dispatch({
    type:GET_USERS,
    payload:response.data
   })
   } catch (error) {
    alert("get error")
   }
}

export const delusers = (id) => async (dispatch)=>{
    try {
        await axios.delete(`/delete/${id}`)
        dispatch({
            type:DEL_USERS,
            payload:id
           })
    } catch (error) {
        alert("delete error")  
    }
}

export const addusers = (newuser)=> async (dispatch)=>{
    try {
        const {data}=await axios.post('/add',newuser)
        dispatch({
            type:ADD_USERS,
            payload:data
           })
    } catch (error) {
        alert("add error")
    }
}

export const editusers = (editeduser)=> async (dispatch)=>{

        const {res}=await axios.put(`/update/${editeduser._id}`,editeduser)

    //   console.log("res",res)
        dispatch({
            type:EDIT_USERS,
            payload:res.data
           })
   
}