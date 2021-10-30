import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Design from "./Components/Design";
import Fashion from "./Components/Fashion";
import Home from "./Components/Home";
//import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/fashion">
            <Fashion />
          </Route>
          <Route path="/design">
            <Design />
          </Route>
        </Switch>
    </Router>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <p>Landing Page Comes Here</p>
//       </header>
//     </div>
//   );
// }

export default App;
