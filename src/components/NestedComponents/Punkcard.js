import React from 'react';
import  weth from "./weth.png";
import  './Punkcard.css'

const Punkcard = ({image, id, traits, name}) => {
    return ( 
        <div className='punkCard' >
            <div className='punkImgContainer'>
                <img className='punkImg' src={image} alt="punk Image" />
            </div>
            <div className='details'>
                <h4 className='name'>{name}<span>#</span></h4>
                <div className='id'>-#{id}</div>
                <div className='priceContainer'>
                    <img className='ethImg' src={weth} alt="EthImage"/>
                    <div className="price">{traits}</div>
                </div>
            </div>

        </div>
     );
}
 
export default Punkcard;