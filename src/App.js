import React from "react";
import Home from "./pages/Home";
import Nav from "./components/Nav";
//styles
import GlobalStyles from "./components/GlobalStyles";
//Router
import {Route} from "react-router-dom";


function App() {

  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Route path={["/games/:id","/"]}>
      <Home />
      </Route>
    </div>
  );
}

export default App;
