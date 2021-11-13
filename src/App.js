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
import ChildMarriage from "./Pages/BlogPages/ChildMarriage";
import MeToo from "./Pages/BlogPages/MeToo";
import Misogyny from "./Pages/BlogPages/Misogyny";
import PakPolice from "./Pages/BlogPages/PakPolice";
import ThreatsChildren from "./Pages/BlogPages/ThreatsChildren";

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
          <Route path="/Misogyny" component={Misogyny}/>
          <Route path="/PakPolice" component={PakPolice}/>
          <Route path="/ThreatsChildren" component={ThreatsChildren}/>
        </Switch>
      </Router>
    </>
  );
}

export default App;
