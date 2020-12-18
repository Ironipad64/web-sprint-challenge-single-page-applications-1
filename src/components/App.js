import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from "react-router-dom";
import styled from "styled-components";

import Pizza from "./Form";
import Home from "./Home";



// function fetchStock() {
//   // fetchStock simulates getting data through axios.get(<URL>)
//   return Promise.resolve({ success: true, data });
// }

const App = () => {
  // const [stock, setStock] = useState([]);

  // useEffect(() => {
  //   fetchStock().then((res) => setStock(res.data));
  // }, []);

  return (
    <StyledApp>
      <div className="App">
        <nav>
          <h1>Lambda Eats</h1>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/Pizza">Pizza</Link>
          </div>
        </nav>
        <Switch>
          <Route path="/Pizza">
            <Pizza />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
      </div>
    </StyledApp>
  );
};

export default App;


const StyledApp = styled.div`
/* *{
  border: 1px solid black;
} */

nav{
  background-color: #ffd88c;
}

h1{
  color: #CC5B3B;
  margin-left: 44%;
}
.nav-links {
  display: flex;
  justify-content: space-between;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  border-bottom: 1px solid #efefef;
  margin-bottom: 32px;
}

.nav-links a {
  text-decoration: none;
  color: #CC5B3B;
  font-weight: bold;
  margin-right: 8px;
}

.nav-links a:last-of-type {
  margin-right: 10px;
  margin-bottom: 10px;
}

`