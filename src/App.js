import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from 'axios'

import "./App.css";
import UserList from "./pages/userlist/UserList";
import User from "./pages/home/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import { useEffect, useState } from "react";

function App() {
  const [userStats, setUserStats] = useState([])

  const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Oct", "Nov", "Dec"];

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjk4NWY5YTg5ODQ0YjUzOTk5MjQwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NjQ4NDcyNywiZXhwIjoxNjU2OTE2NzI3fQ.sJtjhrJBpqZV-KrWiSU-WELuk4KjsW-wFdWFaxfoVw8"
          }
        })

        setUserStats(res.data)

      } catch (err) {
        console.log(err);
      }
    }




    getStats();
  }, [])

  console.log(userStats);

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
            <Product />
          </Route>

          <Route path='/newProduct'>
            <NewProduct />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
