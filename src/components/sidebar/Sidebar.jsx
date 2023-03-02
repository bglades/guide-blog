import React from 'react'
import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
     <div className='sidebarItem'>
      <span className='sidebarTitle'>ABOUT ME</span>
      <img src='/me.jpg' />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusamus cumque voluptates perferendis, voluptas, iste nesciunt voluptate labore magnam qui ducimus doloremque assumenda possimus quod incidunt, sequi at sapiente praesentium.</p>
    </div>
    <div className='sidebarItem'>
      <span className='sidebarTitle'>CATEGORIES</span>
      <ul className='sidebarList'>
        <li className='sidebarListItem'>
        Colorado Month by Month
        </li>
        <li className='sidebarListItem'>
        Colorado Hikes
        </li>
        <li className='sidebarListItem'>
        United States Travel
        </li>
        <li className='sidebarListItem'>
        International Travel
        </li>
      </ul>
    </div>
    <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
