const defaultState = {
  inputNewEvent: "Let's do some thing",
  tododata: [
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
};

export default (state = defaultState, action) => {
  if (action.type === "click_done") {
    //copy a previousa state instance
    const newState = JSON.parse(JSON.stringify(state));
    newState.tododata = action.value;
    return newState;
  } else if (action.type === "click_add_event") {
    const newState = JSON.parse(JSON.stringify(state));
    const newEventItem = {
      id: 6,
      text: action.value,
      completed: false
    };
    newState.tododata.push(newEventItem);
  }
  //return default !!!!
  return state;
};
