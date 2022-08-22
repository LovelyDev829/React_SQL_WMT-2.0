import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function MainBody() {
  const leftbar = useSelector(state => state.leftbar)
  const navigate = useNavigate();
  if(leftbar?.currentId === 1) navigate("/program")
  return (
    <div className='MainBody'>
      <div className='table'>Hello, table will be here.</div>
    </div>
  )
}

export default MainBody