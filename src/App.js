import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductPage from "./pages/products/ProductPage";
import "./pages/home/HomePage.css";

function App() {
  return (
    <BrowserRouter>
      <div className="header">
        <Link to="/">vestore</Link>
      </div>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/products/:id" component={ProductPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
