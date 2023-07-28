import React, { Component } from 'react'
import './style/card.css'
import data from '../data'
let obj=[] 
let flag = 0 //to check if object is present or not
class Card extends Component { 
   
   clickHandler(data){
      //checking if the object is already present
      obj.map(item => {
         if(data.id == item.id) {
             alert("Item already added in the Cart..!!!")
             flag = 1
         }
      })
      if(!flag){ 
         obj = obj.concat(data) 
         console.log(obj)
      }
      else{
         //if present do nothing nd just increment the count
         flag=0
      }
   } 
    render() {
        let result = []
        for (let i = 0; i < data.store.length; i++) {
             if(data.store[i].category == this.props.category){
                result = data.store[i].books
                break;
             }
        }
        return (
           <>
           {  
              result.map(item => 
                <div className="card" key={item.id}>
                <img src={item.image} alt="card image"/>
                <h3>{item.name}</h3>
                <p><i>{item.author}</i></p>
                <p style={{fontWeight:'bold'}}>Price: <i className="fa fa-rupee"></i>{item.price}</p>
                <button className="btn btn-primary bttn" onClick={this.clickHandler.bind(this,item)}>Add to Cart</button>
              </div> ) 
           }
           </>
        )
    }
}

export default Card
export {obj}
  