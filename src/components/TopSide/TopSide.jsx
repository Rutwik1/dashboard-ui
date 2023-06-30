import React from 'react';
import './TopSide.css';
import { FiSearch } from "react-icons/fi";
import { GoPersonFill } from "react-icons/go";
import { MdOutlineMessage, MdNotificationsNone, MdShoppingCart } from "react-icons/md";
import { PiNumberCircleThreeFill, PiCurrencyDollarSimpleBold } from 'react-icons/pi';


const TopSide = () => {
    return (

        <>

            <div className='TopSide'>

                <div className='Navbar'>

                    <div className='Welcome'>
                        <span>Welcome !</span><br />
                        <span className='wel-blue'>Admin</span>
                        <span className='wel-normal'>/Dashboard</span>
                    </div>

                    <div className='Searchbar'>
                        <div className='searchbar-icon'>
                            <FiSearch />
                        </div>
                    </div>

                    <div className='message'>
                        <MdOutlineMessage />
                    </div>

                    <div className='notify-icon'>
                        <MdNotificationsNone />
                        <PiNumberCircleThreeFill className='three-icon' />
                    </div>

                    <div className='profile-circle'>
                        <GoPersonFill className='user-icon' />
                    </div>

                </div>


                <div className='Main_Cards'>

                    <div className='card'>

                        <div className='card-info'>
                            <div className='circle_shape1'>
                                <PiCurrencyDollarSimpleBold className='dollar-icon' />
                            </div>
                            <div className='data-text'>
                                <span>19,512</span><br />
                                <span className='text_head'>Total sale</span>
                            </div>
                        </div>

                        <div className='target_text'>
                            <span>TARGET</span>
                            <span>60%</span>
                        </div>
                        <div className='slide-1'>
                            <div className='slide-blue'>
                            </div>
                        </div>

                    </div>

                    <div className='card'>
                        <div className='card-info'>
                            <div className='circle_shape2'>
                                <MdShoppingCart className='cart-icon' />
                            </div>
                            <div className='data-text'>
                                <span>12,603</span><br />
                                <span className='text_head'>New Orders</span>
                            </div>
                        </div>

                        <div className='target_text'>
                            <span>TARGET</span>
                            <span>90%</span>
                        </div>
                        <div className='slide-1'>
                            <div className='slide-green'>
                            </div>
                        </div>

                    </div>

                    <div className='card'>
                        <div className='card-info'>
                            <div className='circle_shape3'>
                                <GoPersonFill className='profile-icon' />
                            </div>
                            <div className='data-text'>
                                <span>25,330</span><br />
                                <span className='text_head'>New users</span>
                            </div>
                        </div>

                        <div className='target_text'>
                            <span>TARGET</span>
                            <span>60%</span>
                        </div>
                        <div className='slide-1'>
                            <div className='slide-red'>
                            </div>
                        </div>

                    </div>

                </div>


            </div >

        </>
    )
}

export default TopSide;