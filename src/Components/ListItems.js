import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function ListItems(props) {
    const items=props.items;
    const listItem=items.map(i=>{
        return <li key={i.key}>
                    <p>{i.item}</p>
                    <span>
                        <FontAwesomeIcon icon="trash" onClick={()=>props.deleteItems(i.key)}/>   
                    </span>
                </li>
    })
    return (
        <>            
            <div id="list" >
              <ul>
              {
                 listItem
              }
              </ul>
            </div>
        </>
    )
}

export default ListItems
