import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function ImagePage() {
    const leftbar = useSelector(state => state.leftbar)
    const navigate = useNavigate();
    if (leftbar?.currentId === 0) navigate("/home")
    if (leftbar?.currentId === 2) navigate("/inbox")
    if (leftbar?.currentId === 3) navigate("/user")
    return (
        <div className='ImagePage'>
            <div className='table'>Hello, table will be here. This is ImagePage.</div>
        </div>
    )
}

export default ImagePage