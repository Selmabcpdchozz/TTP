import React from 'react'
import './Body.css'
import Top from './Top Section/Top'
import Listing from './Listing section/Lisitng'
import Activity from './Activity Section/Activity'
 const Body =()=>{
    return(
        <div className="mainContent">
            <Top/>
        <div className="bottom flex">
            <Listing/>
            <Activity/>
        </div>
        
        
        
        
        </div>
    )
 }
export default Body ;