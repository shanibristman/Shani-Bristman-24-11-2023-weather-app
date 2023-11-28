import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {


    return (
        <div className="navbar">
            <div className='logo'>
                <div style={{ paddingRight: 20 }}><i className="fa-solid fa-sun size"></i></div>
                <div>WEATHER APP</div>
            </div>
            <div className='icons'>
                <Link to="/">
                    <div className="icon">
                        Home
                    </div>
                </Link>
                <Link to="/favorite">
                    <div className="icon">
                        favorite

                    </div>
                </Link>

            </div>
        </div >
    )
}

