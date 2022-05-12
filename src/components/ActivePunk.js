import React, { useEffect, useState } from 'react';
import more  from '../assets/owner/more.png'
import twitter  from '../assets/owner/twitter.png'
import instagram  from '../assets/owner/instagram.png'
import activePunkImg  from '../assets/owner/punkhead.png'
import ownerImg  from '../assets/owner/check.png'
import './ActivePunk.css';




const ActivePunk = ({selectedPunk, punkListData, owner}) => {
   const [activePunk, setActivePunk] =useState(punkListData[0])


   useEffect(()=>{
      setActivePunk(punkListData[selectedPunk])
    

   }, [selectedPunk, punkListData])
    return ( 
        <div className='activePunk'>
            <div className='actPunkImgCon'>
                <img  className='actPunkImg' src={activePunk.image_original_url}/>
            </div>
             <div className='actPunkDetails'>
                 <div className='actPunkTitleCon'>
                     <h1>{activePunk.name} #{activePunk.token_id}</h1>
                 </div>
                 <div className='idCon'>
                     <p>.#{activePunk.token_id}</p>
                 </div>
                 <div className='actPunkOwner'>
                      <div className='ownerImgCon'>
                          <img className='ownerImg'  src={activePunk.owner.profile_img_url}  alt={activePunk.name} />
                      </div>
                      <div className='walletDetails'>
                          <p className='walletAddress'>{activePunk.asset_contract.address}</p>
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
