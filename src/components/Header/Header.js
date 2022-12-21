import React from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

    const activeStyles = ({isActive})=>({
            opacity: isActive ? 1 : "", 
        })

    return (
        <div className='header'>
            <div className='header-nav'>
                <div className='logo'>
                    <Link to='/'>GO.VITAL</Link>
                </div>
                <div >
                    <ul className='header-item'>
                        <li>
                            <NavLink style={activeStyles} to='/start'>Start</NavLink>
                        </li>
                        <li>
                            <NavLink style={activeStyles} to='/patienten'>Patienten</NavLink>
                        </li>
                        <li>
                            <NavLink style={activeStyles} to='/kurven'>Kurven</NavLink>
                        </li>
                        <li>
                            <NavLink style={activeStyles} to='/einstellungen'>Einstellungen</NavLink>
                        </li>
                        <li >
                            <NavLink style={activeStyles} to='/protokoll'>Protokoll</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header