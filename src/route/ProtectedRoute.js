import React from 'react'
import { Outlet , Navigate } from "react-router-dom";
// const Protected = ({ isLoggedIn, children }) => {
// if (!isLoggedIn) {
//     return (
//     <Navigate to="/login" replace />
//     )
//     }
//     return (children);
//     };
export default function Protected(){
  let  token = localStorage.getItem("token") == null ? false : true;
  return(
    <>
    {token ? <Outlet  /> : <Navigate to="/login" />};
    </>
  )
}
