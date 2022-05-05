import Header from "./components/Header";
import react, { useState, useEffect }  from 'react'
import axios from "axios";
import PunkCollection from "./components/PunkCollection";
import ActivePunk from "./components/ActivePunk";



function App() {
const  [punkListData, setPunkListData] = useState([]);
const   [selectedPunk, setSelectedPunk] = useState(0);


useEffect(()=>{
  const getnft = async () =>{
  const  activepunks = await axios.get(
    'https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=0x814cCA3cAd4Fe0335aCC9211021aE00A4F14226e&order_direction=desc&offset=0&limit=20'
    )
    console.log(activepunks.data.assets)
      setPunkListData(activepunks.data.assets);
     
      }
    
return getnft
  }, [])
 


  return (
    <div className="App">
    <Header/>
    <ActivePunk 
      punkListData={punkListData}
      selectedPunk={selectedPunk}
       name="Active PUnk NAme"
       id="#3"
       walletAddress= "4989757287572756726q7657q267567qnnjhhAy8787"
       owner="Eminence"
    />
    <PunkCollection   punkListData={punkListData}/>

    </div>
  );
}

export default App;
