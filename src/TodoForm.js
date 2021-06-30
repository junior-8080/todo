import React,{Component} from "react"
import unidShortId from 'short-unique-id'
const uid = new unidShortId();

class  TodoForm extends Component{
    constructor(){
        super()
        this.state ={
            text:""
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }
    handleChange(event){
        this.setState({
            text:event.target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.onSubmit({
            id:uid.randomUUID(6),
            text:this.state.text,
            complete:false

        })
        this.setState({
            text:""
        })     
    }
    handleClear(){
        this.props.onClear()
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h2 className="title">MY TODO LIST </h2>
                <div className="todo-form">
                    <input type="text" value={this.state.text} onChange={this.handleChange} placeholder="Enter your task"/>
                    <button type="button"  className="clear" onClick={this.handleSubmit}>Add</button>
                </div>
                <button type="button"  className="clear" style={{background:"red"}} onClick={this.handleClear}>Clear Todos</button>
            </form> 
        )
    }
}
export default TodoForm