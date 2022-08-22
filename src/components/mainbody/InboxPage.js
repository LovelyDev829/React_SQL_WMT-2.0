import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function InboxPage() {
    const leftbar = useSelector(state => state.leftbar)
    const navigate = useNavigate();
    if (leftbar?.currentId === 0) navigate("/home")
    if (leftbar?.currentId === 1) navigate("/image")
    if (leftbar?.currentId === 3) navigate("/user")
    return (
        <div className='InboxPage'>
            <div className='table'>Hello, table will be here. This is InboxPage.</div>
        </div>
    )
}

export default InboxPage