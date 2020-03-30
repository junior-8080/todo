import React from "react"

function TodoItem(props){
    const completedStyle = {
        fontStyle:"italics",
        color:"#8893B8",
        textDecoration:"line-through"
    }
    return(
        <div className="todo-item">
                <input type="checkbox"  onChange={()=>{props.handleCheckChange(props.todo.id)}} checked={props.todo.complete}/>
                <p style={props.todo.complete? completedStyle : null}>{props.todo.text}</p>
                <button type="button" className="delete" onClick={()=>{props.onDelete(props.todo.id)}}>Delete</button>
         </div>
    )
}
export default TodoItem