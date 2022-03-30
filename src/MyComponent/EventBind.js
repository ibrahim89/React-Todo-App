import React, { Component } from 'react'

 class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello World",
             count: 0
        }
    }
     
    clickHandler(){
         this.setState({
            message: "Hello India"
         });
         console.log(this.state.count);
     }
    render() {
        return (
            <div>
               <h4>Event Binding Component message:  {this.state.message} <br/></h4>
              
               <br/> 
               <button className="btn btn-primary" onClick={()=>{this.clickHandler()}}>Click Me</button>
            </div>
        )
    }
}

export default EventBind
