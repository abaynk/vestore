import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductPage from "./pages/products/ProductPage";
import "./pages/home/HomePage.css";
import OformitPage from "./pages/oformit/OformitPage";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Link to="/">vestore</Link>
      </div>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/products/:id" component={ProductPage} />
        <Route exact path="/credit" component={OformitPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
