import React from 'react'
import ReactDOM from 'react-dom'

// class Todoitem extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             isSelected:false
//         }
//     }
    
//     render(props){
//         return(
//             <div className='todo-item'>
//                 <input
//                     type = "checkbox"
//                     checked = {this.props.isComplete}
//                     onChange = {()=>console.log("changed")}
//                 />
//                 <p>{this.props.content}</p>
//             </div>
//         )
//     }


// }
function Todoitem(props){
    return(
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.content.completed} 
                onChange={() => props.clickChange(props.content.id)}
            />
            <p>This is No.{props.content.id} {props.content.text}</p>

        </div>
    )
}

export default Todoitem