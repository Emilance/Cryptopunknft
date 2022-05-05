import React from 'react';
import Punkcard from './NestedComponents/Punkcard';
import './PunkCollection.css'

const PunkCollection = ({ punkListData }) => {
    return ( 
        <div className='punkCollection'>
            {punkListData.map(singlepunk => {
                return(
                    <div>
                    <Punkcard
                    key={singlepunk.token_id}
                    id ={singlepunk.token_id}
                    name={singlepunk.name}
                     image={singlepunk.image_original_url}
                     traits={singlepunk.traits.value}
                
                    />
                </div>
                )
            })}
        </div>
     );
}
 
export default PunkCollection;
