import React from 'react'
import ReactDOM from 'react-dom'

class Todoitem extends React.Component {
    constructor(){
        super()
        this.state = {
            isSelected:false
        }
    }
    
    render(){
        //inlinestyle in here
        const donesytle = {
            //all css element should be in js style (camel), but value is string so it can a-b
            fontStyle: "italic",
            color: "#cdcdcd",
            textDecorate: "line-through",
        }

        return(
            <div className="todo-item">
                <input 
                    type="checkbox" 
                    checked={this.props.content.completed} 
                    onChange={() => this.props.clickChange(this.props.content.id)}
                />
                {/* <remind:1.inline style are already in js dont need {} 2. js syule = need be a object no predefine then{{color:"red"}}> */}
                <p style={this.props.content.completed?donesytle:null}>This is No.{this.props.content.id} {this.props.content.text}</p>
    
            </div>
        )
    }


}


export default Todoitem