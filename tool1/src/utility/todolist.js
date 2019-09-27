import React from 'react'
import Todoitem from './todoitem'
import store from '../store'
// import Exmapletododate from './exmapletododate.js'

class Todolist extends React.Component  {
    constructor(){
        super()
        this.state = store.getState();
        //all function that need change state need be in here
        this.clickChange = this.clickChange.bind(this)
    }

    clickChange(id){
        
        this.setState(
            prevSate => {
                const updated = this.state.tododata.map(item =>{
                    if (item.id === id){
                        item.completed = !item.completed
                    }
                    return item
                })
                //in here need return a state which should be a js object
                return{
                    tododata:updated
                }
            })

        const action ={
            type : 'change_input_value',
            value: this.state
        }
        store.dispatch(action);    
    }

    render(){
        const todoitems = this.state.tododata.map(items=><Todoitem key={items.id} content={items} clickChange={this.clickChange}/>)
        return(
            <div className="todoList">
                {todoitems}                
            </div>
        )
    }


} 

export default Todolist