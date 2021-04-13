import React from "react"

function TodoItem(props){

    const completedStyle = {
        color:"#8893B8",
        textDecoration:"line-through",
        fontStyle:"italic"
    }

    return(

        <tr className="todo-item">
            <td>
                <input type="checkbox"  onChange={()=>{props.handleCheckChange(props.todo.id)}} checked={props.todo.complete}/>
            </td>
            <td>
                <span style={props.todo.complete? completedStyle : null}className="todo">{props.todo.text}</span>
            </td>
            <td>
            <span type="button" className="delete" onClick={()=>{props.onDelete(props.todo.id)}}>Delete</span>
            </td>
        </tr>
       
         
    )
}

export default TodoItem