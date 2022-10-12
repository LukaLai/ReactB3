import { useState } from "react";
import NetworksList from '../components/NetworksList'
import { useNavigate } from "react-router-dom";

export default function HomePage () {
    
    const [networks, setNetworks] = useState([]);
    const navigate = useNavigate()

  async function fetchNetworksHandler() {
    const response = await fetch('http://api.citybik.es/v2/networks');
    const data = await response.json();

   const transformedNetworks = data.networks.map((networksData) => {     
    return {
            id: networksData.id,
            company: networksData.company,
            name: networksData.name,
          };
        });    
    setNetworks(transformedNetworks);
}

function CancelPage() {
    navigate('/')
  }
    return(
        <div>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded m-5"
            onClick={CancelPage}>
                Retour 
            </button>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" 
            onClick={fetchNetworksHandler}>
                Reloading</button>
            <div>
            <h2 class="text-2xl font-semibold leading-tight">Networks List</h2>
            </div>
            <NetworksList networks={networks} />
        </div>
    )
}