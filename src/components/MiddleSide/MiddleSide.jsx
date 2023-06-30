import React from 'react';
import './MiddleSide.css';
import { BsThreeDots } from "react-icons/bs";
import DonutChart from './DonutChart';
import small from './small.png';

const MiddleSide = () => {

    const years = [2014, 2015, 2016, 2017, 2018, 2019, 2020];
    const underscores = ["_", "_", "_", "_", "_"];

    return (
        <>
            <div className='MiddleSide'>

                <div className='Middleside_container'>
                    <div className='Middleside_heading'>
                        <span>Website Status</span>
                    </div>
                    <div className='Status-box'>
                        <div className='Line_1'></div>
                        <div className='Line_2'></div>
                        <div className='line_chart'>
                            <img src={small} alt='imagepng' className='image-png' />
                        </div>
                        <div className='dots_icon'>
                            <BsThreeDots className='icon_inside' />
                        </div>
                        <div className='years'>
                            {years.map((year) => (
                                <span key={year} style={{ marginRight: '65px' }}>{year}</span>
                            ))}
                        </div>
                        <div className='underscores'>
                            {underscores.map((underscore) => (
                                <span key={underscore} style={{ marginTop: '22px' }}>{underscore}</span>
                            ))}
                        </div>
                    </div>
                </div>


                <div className='Middleside_container'>
                    <div className='Middleside_heading'>
                        <span>Graph</span>
                    </div>
                    <div className='Graph-box'>
                        <div className='donut-icon'>
                            <DonutChart className='donut-inside' />
                        </div>
                        <div className='graph-circle'>
                            <span className='graph-circle-text'>Download,<br />Sales<br />& Growth</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default MiddleSide;
