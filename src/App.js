import React, { Suspense, lazy } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loader from "./shared/loader/loader";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import IdleTimerContainer from "./shared/idle-timer/idleTimerContainer";

const MainPage = lazy(() => import("./mainpage/mainpage"));
const MainLanding = lazy(()=>import("./mainpage/mainLandingPage/MainLanding"));
const Login = lazy(() => import("./mainpage/login/login"));
const SingleProduct = lazy(() => import("./mainpage/allProducts/singleProduct"));
const Products = lazy(() => import("./mainpage/allProducts/products"));
const AddImage = lazy(() => import("./mainpage/allProducts/addImage"));
const ShowFiles = lazy(()=> import("./mainpage/allProducts/showFiles"));
const ShowFile = lazy(()=> import("./mainpage/allProducts/showFileTest"));
const otpVerify = lazy(()=> import("./mainpage/login/otpVerification"));
const EditUser = lazy(()=> import("./mainpage/userInfo/UserDetails"));
const LoginDetail = lazy(()=> import("./mainpage/userInfo/LoginDetail"));
const FileInfo = lazy(()=> import("./mainpage/userInfo/FileInfo"));
const Marketing = lazy(()=> import("./mainpage/allMarketing/Marketing"));
const SingleMarketing = lazy(()=> import("./mainpage/allMarketing/SingleMarketing"));
const Operations = lazy(()=> import("./mainpage/allOperations/Operations"));
const SingleOperations = lazy(()=> import("./mainpage/allOperations/SingleOperations"));
const Sales = lazy(()=> import("./mainpage/allSales/Sales"));
const SingleSales = lazy(()=> import("./mainpage/allSales/SingleSales"));
const Finance = lazy(()=> import("./mainpage/allFinance/Finance"));
const SingleFinance = lazy(()=> import("./mainpage/allFinance/SingleFinance"));
const HR = lazy(()=> import("./mainpage/allHr/Hr"));
const SingleHR = lazy(()=> import("./mainpage/allHr/SingleHr"));
const Legal = lazy(()=> import("./mainpage/allLegal/Legal"));
const SingleLegal = lazy(()=> import("./mainpage/allLegal/SingleLegal"));
const Message = lazy(()=> import("./mainpage/allProducts/ShowChatPage"));


function App() {
  return (
    <Router>
          <IdleTimerContainer></IdleTimerContainer>

      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/signin" component={MainPage} />
          <Route path ="/landing/" component={MainLanding} />
          <Route  path="/finance/:id" component={SingleFinance} />
          <Route  path="/marketing/:id" component={SingleMarketing} />
          <Route  path="/operations/:id" component={SingleOperations} />
          <Route  path="/sales/:id" component={SingleSales} />
          <Route  path="/legal/:id" component={SingleLegal} />
          <Route  path="/hr/:id" component={SingleHR} />

          <Route  path="/product/:id" component={SingleProduct} />
          <Route  path="/products/" component={Products} />
          <Route  path="/addImage/:id" component={AddImage} />
          <Route  path="/showFiles/" component={ShowFiles} />
          <Route  path="/showFile/" component={ShowFile} />
          <Route  path="/otpVerify/" component={otpVerify} />
          <Route  path="/showUsers" component={EditUser} />
          <Route  path="/loginInfo" component={LoginDetail} />
          <Route  path="/fileInfo" component={FileInfo} />
          <Route  path="/marketing" component={Marketing} />
          <Route  path="/operations" component={Operations} />
          <Route  path="/sales" component={Sales} />
          <Route  path="/legal" component={Legal} />
          <Route  path="/finance" component={Finance} />
          <Route  path="/hr" component={HR} />
          <Route  path="/message/:id" component={Message} />


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
