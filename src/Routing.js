import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import MainBody from './components/MainBody'
import PrgramPage from './components/PrgramPage'

function Routing() {
    return (
        // <div className='Route'>Route</div>
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path="/" element={<MainBody />} />
                <Route exact path="/home" element={<MainBody />} />
                <Route exact path="/program" element={<PrgramPage />} />
            </Routes>
        </Router>
    )
}

export default Routing