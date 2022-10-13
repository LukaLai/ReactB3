import React from "react"
import Network from "./Networks"

export default function NetworksList (props) {


   return(
    <>
     {props.networks.map((network) => (
        <Network
        key= {network.id}
        id={network.id}
        name={network.name}
        company={network.company}
              />
    ))}
    </>
   )
}
