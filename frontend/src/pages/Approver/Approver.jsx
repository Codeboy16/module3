import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar'

const Approver = () => {
   useEffect(()=>{
    document.title = "Gov of Sikkim - Operator";
   },[])
  return (
    <div>
      <Navbar title="Approver" />
    </div>
  )
}

export default Approver