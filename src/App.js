import React, { Component } from "react"
import TodoForm from "./TodoForm"
import TodoItem from "./TodoItem"
import  './index.css';


class App extends Component{

    constructor(){
        super()
        this.state ={
            todo:"",
            todos:[]
        } 
        this.addTodo =this.addTodo.bind(this)
        this.handleCheckChange =this.handleCheckChange.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.delete = this.delete.bind(this)
    }

    addTodo(todo){
      this.setState({
          todos:[todo,...this.state.todos]
      })
    }

    delete(id){
        const prevTodo = [...this.state.todos]
        const newTodos = prevTodo.filter((prevTodo,index)=>{
            return  prevTodo.id !== id
        })
        console.log(id)
        console.log(newTodos)
        this.setState({
            todos:newTodos
        })
    }

    handleCheckChange(id){
        this.setState(prevState=>{
        const updatedTodos = prevState.todos.map(todo=>{
                    if(todo.id === id){
                        return{ 
                            ...todo,
                        complete:!todo.complete
                        }
                        
                    }
                    return todo
            })
            return {
                todos : updatedTodos
            }
        })
    }

    handleClear(){
        localStorage.removeItem('data')
        this.setState({
            todos:[]
        })
    }

    componentDidMount(){
        const todoList = JSON.parse(localStorage.getItem("data"))
        console.log(todoList)
        return todoList ? 
        this.setState({
            todos : todoList
        })
        : null

    }

    componentDidUpdate(prevProps,prevState){
            const jsonTodo = JSON.stringify(this.state.todos)
            localStorage.setItem("data",jsonTodo)    
       
    }
    
    render(){
        const Todos = this.state.todos.length > 0 ?<>
          <table width="100%">
              {
                 this.state.todos.map(todo =>{
                    return (
                        <TodoItem key={todo.id} todo={todo} handleCheckChange={this.handleCheckChange} onDelete={this.delete}/>  
                    )
             })
              }
          </table>
           {this.state.todos?<span>{this.state.todos.length} items</span>:null}
           </>
         : <h1> Create a todo</h1>
        return(
            <div className="todo-list">
                <TodoForm onSubmit={this.addTodo} onClear={this.handleClear} />
                {Todos}
                
            </div>
        )
    }
}
export default App;
