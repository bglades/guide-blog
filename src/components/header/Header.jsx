import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div className='header'>
        <div className='headerTitles'>
            <span className='headerTitleSm'>Glades Guidebook</span>
            <span className='headerTitleLg'>Travel Blog</span>
        </div>
        <img className='headerImg' 
        src="/background.jpg"
        alt=" " />
    </div>

  )
}
