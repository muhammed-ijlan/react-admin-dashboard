import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import UserList from "./pages/userlist/UserList";
import User from "./pages/home/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>

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

          <Route path='/products'>
            <ProductList />
          </Route>

          <Route path='/product/:productId'>
            <NewUser />
          </Route>

          <Route path='/newProduct'>
            <User />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
