import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Blogs from "./Pages/Blogs";
import Donate from "./Pages/Donate";
import Impact from "./Pages/Impact";
import Gallery from "./Pages/Gallery";
import Single from "./Pages/Single";
import ChildMarriage from "./Pages/BlogPages/ChildMarriage";
import MeToo from "./Pages/BlogPages/MeToo";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/impact" component={Impact} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/donate" component={Donate} />
          <Route path="/ChildMarriage" component={ChildMarriage}/>
          <Route path="/MeToo" component={MeToo}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
