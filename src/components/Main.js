import MainForm from './MainForm'
import Home from './Home'
import { Switch, Route } from "react-router-dom"

const Main = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route exact path="/main-form">
            <MainForm />
        </Route>
    </Switch>
)

export default Main