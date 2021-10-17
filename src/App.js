import HomePage from "./pages/home/HomePage";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ProductPage from "./pages/products/ProductPage";
import "./pages/home/HomePage.css";
import CreditPage from "./pages/credit/CreditPage";
import { Product } from "./context/ProductContext";
import ScanPage from "./pages/scan/ScanPage";
import OformitPage from "./pages/oformit/OformitPage";
import SmsPage from "./pages/oformit/SmsPage";

function App() {
  return (
    <Product>
      <BrowserRouter>
        <div className="header">
          <Link to="/">vestore</Link>
        </div>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products/:id" component={ProductPage} />
          <Route exact path="/credit" component={CreditPage} />
          <Route exact path="/idScan" component={ScanPage} />
          <Route exact path="/register" component={OformitPage} />
          <Route exact path="/confirmSms" component={SmsPage} />
        </Switch>
      </BrowserRouter>
    </Product>
  );
}

export default App;
