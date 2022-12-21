import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-bg'></div>
            <div>
                <ul className='footer-item'>
                    <li>
                        <a href='#'>Datenschutz</a>
                    </li>
                    <li>
                        <a href='#'>Impressum</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer