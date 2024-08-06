import React, { useState  } from 'react'
import { useSearchParams } from 'react-router-dom';

function Fifteen() {

    const item = ["bird", "city", "ocean", "mountain", "forest", "river", "desert", "island", "valley", "jungle", "plain", "meadow", "hill", "lake", "waterfall", "glacier", "canyon", "prairie", "cliff", "reef", "volcano", "gorge", "swamp", "bay", "delta"];
   
    const [searchTerm , setSearchTerm] = useState('')

    const filteredItem = item.filter((item) =>
         item.toLowerCase().includes(searchTerm.toLowerCase())
)

   
  return (
    <>
    <h2>Search here</h2>

    <input type="text" onChange={(e)=> setSearchTerm(e.target.value)} />
    
    <ul>
        {filteredItem.map((item,i)=>(
            <li key={i}>
                {item}
            </li>
        )) }
    </ul>
    </>
  )
}

export default Fifteen