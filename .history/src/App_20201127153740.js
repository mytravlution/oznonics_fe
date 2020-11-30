import React, { Suspense, lazy } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./shared/loader/loader";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const MainPage = lazy(() => import("./mainpage/mainpage"));
const Login = lazy(() => import("./mainpage/login/login"));
const SingleProduct = lazy(() => import("./mainpage/allProducts/singleProduct"));
const Products = lazy(() => import("./mainpage/allProducts/products"));
const AddImage = lazy(() => import("./mainpage/allProducts/addImage"));
const ShowFiles = lazy(()=> import("./mainpage/allProducts/showFiles"))
const ShowFile = lazy(()=> import("./mainpage/allProducts/showFile"));
const otpVerify = lazy(()=> import("./mainpage/login/otpVerification"));
const EditUser = lazy(()=> import("./mainpage/userInfo/UserDetails"));


function App() {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signin" component={MainPage} />
          <Route exact path="/product/:id" component={SingleProduct} />
          <Route exact path="/products/" component={Products} />
          <Route exact path="/addImage/:id" component={AddImage} />
          <Route exact path="/showFiles/" component={ShowFiles} />
          <Route exact path="/showFile/" component={ShowFile} />
          <Route exact path="/otpVerify/" component={otpVerify} />
          <Route exact path="/add-user/" component={EditUser} />
          {/* <Route name="productDetail" exact path="/productdetail/:id/:type" component={ProductDetail} /> */}
          <Route
            component={() => (
              <div style={{ textAlign: "center", lineHeight: "100vh" }}>
                404 - NOT-Found
              </div>
            )}
          />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
