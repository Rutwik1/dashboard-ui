import React from 'react';
import './Inbox.css';
import { InboxData } from '../../Data/Data';
import { FiSearch } from "react-icons/fi";
import { PiShareFat } from "react-icons/pi";


const Inbox = () => {
    return (

        <>

            <div className='Inbox'>

                <div className='Inbox_heading'>
                    <span>Inbox</span>
                </div>

                <div className='menu_ds2'>
                    <div className='menu-ds2-heading'>
                        <span>Recent Chats</span>
                        <div className='menu-ds2-icons'><FiSearch className='menu-ds2-searchicon' /> <PiShareFat className='menu-ds2-shareicon' /></div>
                    </div>
                    {InboxData.map((item, index) => {
                        return (
                            <div className='menuItem_ds2' key={index}>
                                <div>
                                    <img src={item.photo} alt={item.name} className='image1' />
                                </div>
                                <div className='menuItemText_ds2'>
                                    <p><span className='menuItemName_ds2'>{item.name}</span><br />{item.text}</p>
                                </div>
                                <div className='menuItemTime_ds2'>{item.time}</div>
                            </div>
                        )
                    })}
                </div>

            </div >


        </>

    )
}

export default Inbox;