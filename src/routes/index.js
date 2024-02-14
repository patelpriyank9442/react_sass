import React from "react";
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Navbar from "./header/Navbar";
import Home from "./home";

export default function Routes() {
  return (
    <>
      <BrowserRouter>
        <RouteWrapper
          exact={true}
          path="/"
          component={Home}
          layout={DefaultLayout}
        />
      </BrowserRouter>
    </>
  );
}

const DefaultLayout = ({ children, match }) => (
  <>
    <Navbar />
    {children}
    {/* <Footer /> */}
  </>
);
function RouteWrapper({ component: Component, layout: Layout, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
