import React from 'react';
import  punkLogo    from "../assets/header/cryptopunk-logo.png";
import   swicher   from "../assets/header/theme-switch.png";
import   search   from "../assets/header/search.png";

import  './Header.css'


const Header = () => {
    return ( 
        <div className='Header'>
            <div className='punkLogo'>
                <img className='punkLogoImg'  src={punkLogo}/>
            </div>
            <div className='searchContainer'>
                <img className='searchImage' src={search} alt="search"/>
                <input type="text" placeholder='Collection, item  user' className='searchInput' />
            </div>
            <div className='navigations'>
                <p>Drops</p>
                <p>Marketplace</p>
                <p>Create</p>
            </div>
            <div className='swicherContainer'>
                <img src={swicher} className="swicherImg" alt="themeSwicher"/>
            </div>
            <div className='headerButtonConatiner'>
                <button className='headerButton'>GET IN</button>
            </div>

        </div>
     );
}
 
export default Header;