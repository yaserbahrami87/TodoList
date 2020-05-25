import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from 'react-flip-move'
function ListItems(props) {

    const items=props.items;
    const listItem=items.map(i=>{
                
        return <li key={i.key}>
                    <input
                        type="text"
                        id={i.key}
                        value={i.item}
                        onChange={
                            (e)=>
                            {
                               props.editItem(e.target.value,i.key)
                            }}
                        />
                    <span>
                        <FontAwesomeIcon icon="trash" onClick={()=>props.deleteItems(i.key)}/>   
                    </span>                    
                    
                </li>
                
    })
    return (
        <>            
            <div id="list" >
              <ul>
                <FlipMove>
                        {
                            listItem
                        }
                </FlipMove>
              </ul>
            </div>
        </>
    )
}

export default ListItems
