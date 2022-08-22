import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import MainBody from './components/MainBody'
// import PrgramPage from './components/PrgramPage'
import HomePage from './components/mainbody/HomePage'
import ImagePage from './components/mainbody/ImagePage'
import InboxPage from './components/mainbody/InboxPage'
import UserPage from './components/mainbody/UserPage'

function Routing() {
    return (
        // <div className='Route'>Route</div>
        <Router basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route exact path="/"      element={<HomePage  />} />
                <Route exact path="/home"  element={<HomePage  />} />
                <Route exact path="/image" element={<ImagePage />} />
                <Route exact path="/inbox" element={<InboxPage />} />
                <Route exact path="/user"  element={<UserPage  />} />
            </Routes>
        </Router>
    )
}

export default Routing