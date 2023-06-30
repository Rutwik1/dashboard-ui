import React from 'react';
import './SocialTraffic.css';
import facebook from './facebook.png';
import instagram from './instagram.png';
import twitter from './twitter.png';

const SocialTraffic = () => {
    return (
        <>

            <div className='SocialTraffic'>

                <div className='head_container'>
                    <div className='Social_heading'>
                        <span>Social Traffic</span>
                    </div>
                    <div className='see-all-button'>
                        <span className='see-all-btn'>See all</span>
                    </div>
                </div>

                <div className='menu_ds3'>
                    <div className='menu-ds3-heading'>
                        <span>Referral</span>
                        <span>Traffic</span>
                    </div>


                    <div className='menuItem_ds3'>
                        <div className='menuItemIcon_ds3'>
                            <img src={facebook} alt='image' className='image-1' />
                        </div>
                        <div className='menuItemText_ds3'>
                            <span>Facebook</span>
                        </div>
                        <div className='traffic-text'>
                            <span>1.539</span>
                        </div>
                        <div className='slider-1'>
                            <div className='slider-blue'>
                                <div className='slider-circle-1'>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='menuItem_ds3'>
                        <div className='menuItemIcon_ds3'>
                            <img src={instagram} alt='image' className='image-1' />
                        </div>
                        <div className='menuItemText_ds3'>
                            <span>Instagram</span>
                        </div>
                        <div className='traffic-text'>
                            <span>1.895</span>
                        </div>
                        <div className='slider-2'>
                            <div className='slider-green'>
                                <div className='slider-circle-2'>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='menuItem_ds3'>
                        <div className='menuItemIcon_ds3'>
                            <img src={twitter} alt='image' className='image-1' />
                        </div>
                        <div className='menuItemText_ds3'>
                            <span>Twitter</span>
                        </div>
                        <div className='traffic-text'>
                            <span>2.112</span>
                        </div>
                        <div className='slider-3'>
                            <div className='slider-red'>
                                <div className='slider-circle-3'>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


            </div >

        </>
    )
}

export default SocialTraffic;