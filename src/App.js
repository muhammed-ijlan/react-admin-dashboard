import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "./App.css";
import UserList from "./pages/userlist/UserList";
import User from "./pages/home/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/login";


function App() {

  return (
    <Router>
      <Switch>

        <Route path='/login'>
          <Login />
        </Route>

        <Topbar />
        <div className="container">
          <Sidebar />

          <Route exact path='/'>
            <Home />
          </Route>



          <Route path='/users'>
            <UserList />
          </Route>

          <Route path='/user/:userId'>
            <User />
          </Route>
          <Route path='/newUser'>
            <NewUser />
          </Route>

          <Route path='/movies'>
            <ProductList />
          </Route>

          <Route path='/product/:productId'>
            <Product />
          </Route>

          <Route path='/newProduct'>
            <NewProduct />
          </Route>

        </div>
      </Switch>
    </Router>
  );
}

export default App;
