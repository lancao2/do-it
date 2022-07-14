import { Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Route } from "./route";


export const Routes = () => (
    <Switch>
        <Route component={Login} exact path="/"></Route>
        <Route path="/dashboard" component={Dashboard} isPrivate></Route>

    </Switch>
)