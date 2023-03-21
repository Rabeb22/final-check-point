import React from "react";
// import { v4 as uuidv4 } from "uuid";

const CardDetails = ({ phone, email ,id}) => {
  
    return (
      <ul key={id} className="ingredient-list">
        <li className="ingredient-text">Email: {email}</li>
        <li className="ingredient-text">Phone: {phone}</li>
        {/* <li className="ingredient-weight">Phone: {phone}</li> */}
      </ul>
    );
  
};

export default CardDetails;
