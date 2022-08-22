import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function UserPage() {
    const leftbar = useSelector(state => state.leftbar)
    const navigate = useNavigate();
    if (leftbar?.currentId === 0) navigate("/home")
    if (leftbar?.currentId === 1) navigate("/image")
    if (leftbar?.currentId === 2) navigate("/inbox")
    return (
        <div className='UserPage'>
            <div className='table'>Hello, table will be here. This is UserPage.</div>
        </div>
    )
}

export default UserPage