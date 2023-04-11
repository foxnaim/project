import React from 'react'

export default function Header() {
    return (
        <nav className='menu'>
            <a href="/" className='logo'>project</a>
            <div className='menu-text-container origin'>
                <a href="/" className='menu-item'><span>Content</span></a>
                <a href="/" className='menu-item'><span>about</span></a>
                <a href="/" className='menu-item'><span>journey</span></a>
            </div>
            <div></div>
        </nav>

    )
}
