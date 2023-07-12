import GlobalStyles from "./GlobalStyles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar } from "./components";
import { inspectUser, duelUsers } from './services/userService'
import { useEffect } from "react";
import InspectScreen from "./screens/InspectScreen.js";
import DuelScreen from "./screens/DuelScreen";
import HomeScreen from "./screens/HomeScreen";
function App() {

 
 // Hook that runs after React has updated the DOM
 
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route exact path = '/' component= {HomeScreen}></Route>
        <Route path = '/inspect' component= {InspectScreen}></Route>
        <Route path = '/duel' component= {DuelScreen}></Route>

      </Switch>
    </Router>
  );
}


export default App;
