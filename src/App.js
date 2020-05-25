import React from 'react'
import './App.css';
import ListItems from './Components/ListItems';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
library.add(faTrash)
export class App extends React.Component {
  constructor(props) {
    super(props)
    this.ref=React.createRef()
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
    if(e.target.value.length!==0)
    {
      this.setState(
        {
          currentItem:{
              item: e.target.value,
              key:Date.now()
          }
        })
    }    
  }

  add=(e)=>
  {
    e.preventDefault() 
    if(this.state.currentItem.item.length!==0)
    {         
      const newItems=[...this.state.items,this.state.currentItem]
      this.setState({
          items:newItems,
          currentItem:{
            item:'',
            key:''
          }
      })
      this.ref.current.value=""
    }
  }

  deleteItems=(id)=>
  {    
    const idList=this.state.items.filter(item=>item.key!==id)
    this.setState({
      items:idList
    })
    console.log(id)
  }

  editItem=(val,id)=>
  {
    const items2=this.state.items;
    items2.map(item=>{
      if(item.key===id)
      {
        item.item=val
      }      
    })
    this.setState({
      items:items2
    })
  }

  render() {
    return (
      <div className="div_body"> 
        <h1>To Do List with React</h1>
        <h1>Add , Edit & Remove </h1>
        <form onSubmit={this.add}>
            <input type="text" 
                  placeholder="Please Enter the Todo"
                  name="item"
                  onChange={this.changeHandler}
                  ref={this.ref}
            />
            <button>Add</button>
            <ListItems items={this.state.items} deleteItems={this.deleteItems} editItem={this.editItem}/>
        </form>    
      </div>
    )
  }
}

export default App
