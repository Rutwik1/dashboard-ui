import React from 'react';
import './SideBar.css';
import { MdSignalCellularAlt } from 'react-icons/md';
import { PiNumberCircleThreeFill } from 'react-icons/pi';

import { SidebarData } from '../Data/Data';

const SideBar = () => {
    return (
        <>

            <div className='SideBar'>

                <div className='logo'>
                    <span>LOGO</span>
                </div>

                <div className='dashboard'>
                    <div className='dash-icon'>
                        <MdSignalCellularAlt />
                    </div>
                    <span>Dashboard</span>
                </div >

                <div className='menu'>
                    {SidebarData.map((item, index) => {
                        return (
                            <div className='menuItem' key={index}>
                                <div className='menu-icons' ><item.icon /></div>
                                <span>
                                    {item.heading}
                                </span>
                            </div>
                        )
                    })}

                </div>

                <div className='no-icon'>
                    <PiNumberCircleThreeFill />
                </div>

                <div className='new-icon'>
                    <span>New</span>
                </div>

            </div >

        </>
    )
}

export default SideBar;