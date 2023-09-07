import React, {useState} from 'react'
import Logo from '../../imgs/logo.png';
import './Sidebar.css'

import { SidebarData } from '../../Data/Data'
import {MdLogout} from 'react-icons/md';

const Sidebar = () => {

  const [selected, setSelected] = useState(0)

  return (
    <div className="Sidebar">
        <div className="logo">
            <img src={Logo} alt=""/>
        </div>

        <div className='menu'>
           {SidebarData.map((item, index)=>{
            return(
              <div className={selected===index?'menuItem active': 'menuItem'}
              key={index}
              onClick={()=>setSelected(index)}
              >
                <item.icon/>
                <span>
                  {item.heading}
                </span>
              </div>
            )
           })}

           <div className='menuItem'>
              <MdLogout />
           </div>

        </div>
    </div>
  )
}

export default Sidebar