import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from "./Header";
import Homepage from "./Homepage";
import About from "./About";
// import Footer from "./Footer.js";
import FAQs from "./FAQs";
import PrivacyPolicy from "./PrivacyPolicy";
import Terms from "./Terms and condition";
import Contact from "./Contact";
import VideoArticle from "./VideoAritcle";
import Login from "./Login";
import ArticleDetials from "./ArticleDetials";
import SignUp from "./SignUp";
import EmailVerfication from "./EmailVerfication";
import PasswordReset from "./PasswordReset";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <header className="App-header"><Header /></header> */}
        <div className="App-content">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route exact path="/FAQs">
              <FAQs />
            </Route>
            <Route exact path="/privacy-policy">
              <PrivacyPolicy />
            </Route>
            <Route exact path="/terms">
              <Terms />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/video and article">
              <VideoArticle />
            </Route>
            <Route exact path="/ArticleDetials">
              <ArticleDetials />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/SignUp">
              <SignUp />
            </Route>
            <Route exact path="/EmailVerfication">
              <EmailVerfication />
            </Route>
            <Route exact path="/PasswordReset">
              <PasswordReset />
            </Route>
          </Switch>
        </div>
        {/* <div className="App-footer"><Footer /></div> */}
      </div>
    </Router>
  );
}

export default App;
