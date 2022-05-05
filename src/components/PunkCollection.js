import React from 'react';
import Punkcard from './NestedComponents/Punkcard';
import './PunkCollection.css'

const PunkCollection = ({ punkListData, setSelectedPunk }) => {
    return ( 
        <div className='punkCollection'>
            {punkListData.map(singlepunk => {
                return(
                    <div  key={singlepunk.token_id}  onClick={() => setSelectedPunk(singlepunk.token_id)}>
                    <Punkcard
                   
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
