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
                onChange={() => console.log("Changed!")}
            />
            <p>{props.content}</p>
        </div>
    )
}

export default Todoitem