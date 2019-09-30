import React from "react";
import Todoitem from "./todoitem";
import store from "../store";
// import Exmapletododate from './exmapletododate.js'

class Todolist extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    //all function that need change state need be in here
    this.clickChange = this.clickChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.inputEventUpdate = this.inputEventUpdate.bind(this);
    this.clickAddNewEvent = this.clickAddNewEvent.bind(this);
    store.subscribe(this.handleChange);
  }

  clickChange(id) {
    const updated = this.state.tododata.map(item => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });

    const action = {
      type: "click_done",
      value: updated
    };
    store.dispatch(action);
  }

  handleChange() {
    this.setState(store.getState());
  }

  clickAddNewEvent(event) {
    event.preventDefault();
    const action = {
      type: "click_add_event"
    };
    store.dispatch(action);
  }

  inputEventUpdate(event) {
    const action = {
      type: "input_event",
      value: event.target.value
    };
    store.dispatch(action);
  }

  render() {
    const todoitems = this.state.tododata.map(items => (
      <Todoitem key={items.id} content={items} clickChange={this.clickChange} />
    ));
    return (
      <div>
        >
        <form>
          <label>
            Add Event:
            <input
              type="text"
              name="name"
              value={this.state.inputNewEvent}
              placeholder={"let's do someting today"}
              onChange={this.inputEventUpdate}
            />
          </label>
          <button onClick={this.clickAddNewEvent}>ADD</button>
        </form>
        <div className="todoList">{todoitems}</div>
      </div>
    );
  }
}

export default Todolist;
