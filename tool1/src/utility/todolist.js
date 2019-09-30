import React from "react";
import Todoitem from "./todoitem";
import store from "../store";
// import Exmapletododate from './exmapletododate.js'

class Todolist extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    console.log(this.state);
    //all function that need change state need be in here
    this.clickChange = this.clickChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
  clickAddNewEvent() {
    const action = {
      type: "click_add_event",
      value: this.state.inputNewEvent
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
              placeholder={this.state.inputNewEvent}
              onChange={this.clickAddNewEvent}
            />
          </label>
          <input type="submit" value="Add" />
        </form>
        <div className="todoList">{todoitems}</div>
      </div>
    );
  }
}

export default Todolist;
