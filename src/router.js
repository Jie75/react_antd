import React from 'react'
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import App from "./App";
import Login from "./pages/login";
import Admin from "./admin";
import NoMatch from './pages/nomatch';
import Home from './pages/home';
import Buttons from "./pages/ui/buttons.js";
import Modals from './pages/ui/modals.js';
import Loadings from './pages/ui/loading';
import Notifications from './pages/ui/notification';
import Messages from './pages/ui/message';
import Tab from './pages/ui/tabs';
import Gallery from './pages/ui/gallery';
import Carousel from './pages/ui/carousel';
import LoginForm from './pages/form/login';
import register from './pages/form/register';
import BasicTable from './pages/table/basicTable';
import HightTable from './pages/table/highTable';
import City from './pages/city';
export default class IRouter extends React.Component {


    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/" render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Home} />
                                    <Route path="/ui/buttons" component={Buttons} />
                                    <Route path="/ui/modals" component={Modals} />
                                    <Route path="/ui/loadings" component={Loadings} />
                                    <Route path="/ui/notification" component={Notifications} />
                                    <Route path="/ui/messages" component={Messages} />
                                    <Route path="/ui/tabs" component={Tab} />
                                    <Route path="/ui/gallery" component={Gallery} />
                                    <Route path="/ui/carousel" component={Carousel} />
                                    <Route path="/form/login" component={LoginForm} />
                                    <Route path="/form/reg" component={register} />
                                    <Route path="/table/basic" component={BasicTable} />
                                    <Route path="/table/high" component={HightTable} />
                                    <Route path="/city" component={City} />
                                    <Redirect to="/home" />
                                    <Route path="/" component={NoMatch} />
                                </Switch>
                            </Admin>
                        } />
                    </Switch>
                </App>
            </HashRouter>
        );
    }
}