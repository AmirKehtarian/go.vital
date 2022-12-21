import React from 'react'
import './Content.css'

const Content = ({ children, title, icon }) => {
    return (
        <div className='content'>
            <div className='content-header'>{ title } { icon }</div>
            { children }
        </div>
    )
}

export default Content