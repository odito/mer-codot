import React from 'react'

export default function DataItems(props) {
    return (
        <div className="data-center" >
           {props.data.map(item=>(
               <div className="single-data" key={item.id}>
                   <h3>#{item.id}</h3>
                   <h1>{item.title}</h1>
           <p>{item.desc}</p>
               </div>
           ))} 
        </div>
    )
}
