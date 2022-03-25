import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Error404 from "./Error404";

// firebase SDK
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from 'firebase/functions';

const dotenv = require("dotenv");
dotenv.config();

// Initialize Firebase Functions
const app = initializeApp({
  apiKey: "AIzaSyCh9O0nrG7N12deQre6dMBwCnOgpvCRUhg",
  authDomain: "kloudexplorer.firebaseapp.com",
  projectId: "kloudexplorer",
  storageBucket: "kloudexplorer.appspot.com",
  messagingSenderId: "720233833236",
  appId: "1:720233833236:web:288f451aeec0c09e511801",
  measurementId: "G-PFKRX34X6P"
});
const analytics = getAnalytics(app); // initialize analytics
const functions = getFunctions(app); // all your callable functions are now accessible from your frontend

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/random">
          <Home />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/404">
          <Error404 />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
