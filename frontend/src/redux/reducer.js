import { ADD_USERS, DEL_USERS, EDIT_USERS, GET_USERS } from "./actionTypes";

const init={
    loading:true,
    users:[],
    // users:null
}

const reducer=(state=init,{type,payload})=>{
    switch (type) {
        case GET_USERS:
            
            return {...state,users:payload,loading:false};
        case DEL_USERS:
            
            return {...state,users:state.users.filter(el=>el._id!==payload)};
        case ADD_USERS:
            
            return {...state,users:[...state.users,payload]};  
        case EDIT_USERS:
            return {...state,users:state.users.map(el=>{el._id===payload._id?el=payload:el=el})}          
    
        default:
            return state;
    }
}
export default reducer