import React from 'react'
import ReactDOm from 'react-dom'
import Todoitem from './todoitem'
// import exmapletododate from './exmapletododate.js'

class Todolist extends React.Component  {
    constructor(){
        super()
        this.state = {
            tododata:[
                {
                    id: 1,
                    text: "Take out the trash",
                    completed: true
                },
                {
                    id: 2,
                    text: "Grocery shopping",
                    completed: false
                },
                {
                    id: 3,
                    text: "Clean gecko tank",
                    completed: false
                },
                {
                    id: 4,
                    text: "Mow lawn",
                    completed: true
                },
                {
                    id: 5,
                    text: "Catch up on Arrested Development",
                    completed: false
                }
            ]
        }
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