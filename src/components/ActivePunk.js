import React, { useState } from 'react';
import more  from '../assets/owner/more.png'
import twitter  from '../assets/owner/twitter.png'
import instagram  from '../assets/owner/instagram.png'
import activePunkImg  from '../assets/owner/punkhead.png'
import ownerImg  from '../assets/owner/check.png'
import './ActivePunk.css';




const ActivePunk = ({selectedpunk, punkListData,  name, id, owner, walletAddress,}) => {
   const [activePunk, setActivePunk] =useState(punkListData[0])

   console.log(punkListData[4])
    return ( 
        <div className='activePunk'>
            <div className='actPunkImgCon'>
                <img  className='actPunkImg' src={activePunkImg}/>
            </div>
             <div className='actPunkDetails'>
                 <div className='actPunkTitleCon'>
                     <h1>{name} {id}</h1>
                 </div>
                 <div className='idCon'>
                     <p>.{id}</p>
                 </div>
                 <div className='actPunkOwner'>
                      <div className='ownerImgCon'>
                          <img className='ownerImg'  src={ownerImg}  alt={name} />
                      </div>
                      <div className='walletDetails'>
                          <p className='walletAddress'>{walletAddress}</p>
                          <p className='owner'>{owner}</p> 
                      </div>
                      <div className='socialIcons'>
                          <img className='instagram' src={instagram}/>
                          <img className='twiiter' src={twitter}/>
                          <img className='iption' src={more}/>
                      </div>
                 </div>
             </div>
        </div>
     );
}
 
export default ActivePunk;
