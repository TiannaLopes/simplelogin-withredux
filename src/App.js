import "./App.css";
import WelcomePage from "./components/WelcomePage";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import redux from "redux";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/loginPage">Login</Link>
          </li>
          <li>
            <Link to="/signupPage">Sign up</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/loginPage">
            <LoginPage />
          </Route>
          <Route path="/signupPage">
            <SignupPage />
          </Route>
        </Switch>

        {/* <WelcomePage />
        <LoginPage />
        <SignupPage /> */}
      </div>
    </Router>
  );
}

export default App;
