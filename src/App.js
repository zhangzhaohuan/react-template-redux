import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Loadable from "react-loadable";
import { MyLoadingComponent } from "./component/common/MyLoadingComponent";

import './style/App.scss';
import styles from './style/module/demo.module.scss';
const Home = Loadable({
  loader: () => import("./page/home"),
  loading: MyLoadingComponent
});
const Login = Loadable({
  loader: () => import("./page/login"),
  loading: MyLoadingComponent
});

function App(props) {
  console.log(props);
  return (
    <div className="App">
      {/* ------css module start */}
      <div className={styles.name}>
        <div>
          <div className={styles.age}>
            css module
            </div>
        </div>
      </div>
      <div className='name'>css2 module </div>
      {/* ------css module end */}

      <Router>
        <div>
          <ul>
            <li><Link to='/login'>login</Link></li>
            <li><Link to='/register'>register</Link></li>
            <li><Link to='/antd'>antd</Link></li>
            <li><Link to='/'>home</Link></li>
          </ul>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
