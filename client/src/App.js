import React,{Component} from 'react';
import axios from 'axios';
import Items from './items';
import {BrowserRouter, Link, Route} from 'react-router-dom';


import './App.css';


class  App extends Component {

state={

  name:'',
  email:'',
  description:'',
  incItems:[]

}

 handleChange=(e)=>{
 
  this.setState({
    [e.target.name]:e.target.value
  })


 
}


fetchTodos= async()=>{

  const res = await axios.get("/user");
  this.setState({
    incItems:res.data
  })

}

async componentDidMount(){

this.fetchTodos();
 

}

addItem= (e)=>{

e.preventDefault();
console.log(`added`);
  let item={
     name:this.state.name,
     email:this.state.email,
     description:this.state.description
  }

 
  axios.post('/user',item)
  .then(res=>  this.setState({
  
    incItems:[...this.state.incItems,item],
    name:'',
    email:'',
    description:'',
  }))




  console.log(item);
}


deleteItem =(id)=>{

const updatedTodos = this.state.incItems.filter(item=>item._id!==id)

this.setState({
  incItems:updatedTodos
})


axios.delete(`/user/${id}`)
// .then(res=>this.setState({
//   incItems:updatedTodos
// })).catch(err=>console.log(err))
// this.componentDidMount();

}






  render(){


    return (
      <BrowserRouter>
         <div className="App">
      <div className="container">
      <div className="forma" >
          <form onSubmit={this.addItem}>
            <span>name:</span>
            <input type="text" value={this.state.name} name="name" onChange={this.handleChange} placeholder="your name" required />
            <span>email:</span>
            <input type="email" value={this.state.email} name="email" onChange={this.handleChange} placeholder="your email" required  />
           <span> description:</span>
            <input type="text" value={this.state.description} name="description" onChange={this.handleChange} placeholder=" description" required />
            
            <div className="btn">
            <button >submit</button>
            </div>
  
          </form>
        </div>
  
     {/* incoming items */}
     <div className="items">

     <Route exact path='/' >
       <Items  incItems={this.state.incItems} deleteItem={this.deleteItem}  />
     </Route>

 
  
     </div>
      </div>
  
      </div>
      </BrowserRouter>
     
    )
  }



}

export default App;
