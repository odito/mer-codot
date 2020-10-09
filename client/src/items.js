import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Items extends Component {
   

    render(props) {

     


        return (
            <div>
                    {this.props.incItems.map(item=>(
       
     <div className="incoming" key={item._id}>
        <div className="icons">
           <Link to={`user/${item._id}`}> <i className="fas fa-edit"></i></Link>
            <i className="fas fa-trash" onClick={()=>this.props.deleteItem(item._id)}></i>
          </div>

      <div className="textItem">
        
       <div className="single">
         
         <div className="name">
         <span>name:</span>
          <p>{item.name}</p>
         </div>

         <div className="email">
         <span>email:</span>
         <p>{item.email}</p>
         </div>

         <div className="description">
         <span>description:</span>
         <p>{item.description}</p>
         </div>

       </div>
       

      </div>
     </div> 
   
   ))}
            </div>
        )
    }
}
