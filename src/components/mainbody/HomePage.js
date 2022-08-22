import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function HomePage() {
    const leftbar = useSelector(state => state.leftbar)
    const navigate = useNavigate();
    if (leftbar?.currentId === 1) navigate("/image")
    if (leftbar?.currentId === 2) navigate("/inbox")
    if (leftbar?.currentId === 3) navigate("/user")
    return (
        <div className='HomePage'>
            <div className='table'>Hello, table will be here. This is HomePage.</div>
        </div>
    )
}

export default HomePage