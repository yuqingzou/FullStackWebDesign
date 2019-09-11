import React from 'react'

class RegisterForm extends React.Component {
    constructor(){
        super()
        this.state = {
            firstname:"",
            lastname:"",
            agreed: false,
            leftMessage:""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name,value,type,checked} = event.target
        //villina js usage [] is bez name is string need to trans to variable name[event.target.name]:event.target.value
        //[name] use [] with same reason
        type === "checkbox"? this.setState({[name]:checked}) : this.setState({[name]:value})    
    }

    render(){
        return(
            <form>
                <input 
                    type="text" 
                    value = {this.state.firstname}
                    name = "firstname"
                    placeholder="First name" 
                    onChange={this.handleChange}
                />
                <br/>
                <input 
                    type="text"
                    value = {this.state.lastname}
                    name = "lastname" 
                    placeholder="Last name" 
                    onChange={this.handleChange} 
                />
                <br/>
                <textarea name="leftMessage" placeholder={"leave your meassge here"} onChange={this.handleChange}/>
                <br/>
                <h1>YOU NAME IS {this.state.firstname} {this.state.lastname}</h1>
                <br/>
                <label>
                    <input
                        type = "checkbox"
                        checked={this.state.agreed}
                        name = "agreed"
                        onChange = {this.handleChange}
                    />YOU AGREE RECEIVE EMAIL?
                </label>
                <br/>
                <h1>What your gender？</h1>
                <br/>
                <label>
                    <input
                        type = "radio"
                        checked={this.state.gender === "male"}
                        name = "gender"
                        value = "male"
                        onChange = {this.handleChange}
                    />Male
                </label>
                <br/>
                <label>
                    <input
                        type = "radio"
                        checked={this.state.gender === "female"}
                        name = "gender"
                        value = "female"
                        onChange = {this.handleChange}
                    />FEMALE
                </label>
                
                
            </form>
        )
    }

}

export default RegisterForm