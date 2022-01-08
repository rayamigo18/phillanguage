import React from "react";
import Navbar from "./components/Navbar";

import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/pages/Products";
import AboutUs from "./components/pages/AboutUs";
import ContactUs from "./components/pages/ContactUs";
import Enrolment from "./components/pages/Enrolment";
import Terms from "./components/pages/Terms";
import COP from "./components/pages/COP";
import DP from "./components/pages/DP";
import Criteria from "./components/pages/Criteria";
import PhotoGallery from "./components/pages/PhotoGallery";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/contact-us" component={ContactUs} />
          <Route path="/terms" component={Terms} />
          <Route path="/cop" component={COP} />
          <Route path="/dp" component={DP} />
          <Route path="/criteria" component={Criteria} />
          <Route path="/photogallery" component={PhotoGallery} />
          <Route path="/enrolment" component={Enrolment} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
