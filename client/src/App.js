import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SearchBooks from "./pages/SearchBooks";
// import SavedBooks from "./pages/SavedBooks";

function App() {
  return (
      <Router>
        <div>
          <Navbar />
          <Header />
          <Switch>
            <Route exact path ="/" component={SearchBooks} />
            <Route exact path ="/Books" component = {SearchBooks} />
            {/* <Route exact path='/saved' component={SavedBooks} />  */}
          </Switch>
        </div>
      </Router>
  );
}

export default App;
