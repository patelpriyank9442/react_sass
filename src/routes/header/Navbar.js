import React from 'react'
import './navbar.scss';
import logo from '../../image/logo.jpeg'

const Navbar = () => {
    return (
        <>
            <div className='navbar container'>
                <div className='logo'>
                    <img src={logo} alt='logo' />
                    <div className='menu'>
                        <ul className="list">
                            <li className="items">Home</li>
                            <li className="items">About Us</li>
                            <li className="items">Lab Ground Diamond</li>
                            <li className="items">Products</li>
                            <li className="items">Inventory</li>
                            <li className="items">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar