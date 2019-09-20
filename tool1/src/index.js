import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// let routes = (
//   <div className="app">
//     <Router>
//       <Route name="main">
//         <Route name="home" path="/" component={App} />
//         <Route name="register" path="/register" component={RegisterForm} />
//         <Route
//           name="jointeam"
//           path="/memegenerator"
//           component={MemeGenerator}
//         />
//         <Route name="testone" path="/testone" component={Testone}></Route>
//         <Route name="home" exact path="/todolist" component={Todolist} />
//       </Route>
//     </Router>
//   </div>
// );

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
