import React from 'react';
import './Account.css';
import { AccountData } from '../../Data/Data';

const Account = () => {
    return (

        <>

            <div className='Account'>

                <div className='account_heading'>
                    <span>Account</span>
                </div>

                <div className='menu_ds1'>
                    {AccountData.map((item, index) => {
                        return (
                            <div className='menuItem_ds1' key={index}>
                                <div className='menu-icons_ds1' ><item.icon /></div>
                                <span>
                                    {item.heading}
                                </span>
                            </div>
                        )
                    })}

                </div>

            </div>

        </>


    )
}

export default Account;