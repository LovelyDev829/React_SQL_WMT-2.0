import React from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';

function PrgramPage() {
    const leftbar = useSelector(state => state.leftbar)
    const navigate = useNavigate();
    if (leftbar?.currentId === 0) navigate("/home")
    return (
        <div className='PrgramPage'>
            <div className='table'>Hello, table will be here. This is ProgramPage.</div>
        </div>
    )
}

export default PrgramPage