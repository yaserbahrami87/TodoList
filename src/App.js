import React from 'react'
import './App.css';
export class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
       items:[],
       currentItem:{
         item:'',
         key:''
       }
    }
  }
  
  render() {
    return (
      <div className="div_body"> 
        <input type="text" placeholder="Please Enter the Todo"/>
        <button>Add</button>
        <div id="list"></div>    
      </div>
    )
  }
}

export default App
