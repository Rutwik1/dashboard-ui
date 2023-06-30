import React from 'react';
import './DownSide.css';
import Account from './Account/Account';
import Inbox from './Inbox/Inbox';
import SocialTraffic from './SocialTraffic/SocialTraffic';

const DownSide = () => {
    return (

        <>

            <div className='DownSide'>

                <Account />
                <Inbox />
                <SocialTraffic />

            </div>


        </>

    )
}

export default DownSide;