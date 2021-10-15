import HomePage from "./pages/home/HomePage";
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import ProductPage from "./pages/products/ProductPage";

function App() {
  return (
   <BrowserRouter>
   <Switch>
     <Route exact path='/' component={HomePage}/>
     <Route path='/products/:id' component={ProductPage} />
   </Switch>
   </BrowserRouter>
  );
}

export default App;
