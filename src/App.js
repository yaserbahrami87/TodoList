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
  
  changeHandler=(e)=>
  {
    this.setState(
        {
          currentItem:{
              item: e.target.value,
              key:Date.now()
          }
        })
  }

  add=(e)=>
  {
    e.preventDefault()
    const newItems=[...this.state.items,this.state.currentItem]
    this.setState({
        items:newItems,
        currentItem:{
          item:'',
          key:''
        }
    })
  }

  render() {
    return (
      <div className="div_body"> 
        <form onSubmit={this.add}>
            <input type="text" 
                  placeholder="Please Enter the Todo"
                  onChange={this.changeHandler}
            />
            <button>Add</button>
            <div id="list">
              <ul>
              {
                this.state.items.map(i=>(
                  <li key={i.key}>{i.item}</li>
                ))
              }
              </ul>
            </div>
        </form>    
      </div>
    )
  }
}

export default App
