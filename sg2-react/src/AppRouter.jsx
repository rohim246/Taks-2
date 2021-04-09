// import Home from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Anime from "./pages/Anime"
import NewsCnbc from "./Pages/NewsCnbc";
import { Switch, Route } from "react-router-dom"

export default function AppRouter() {
    return (
        <Switch>
            <Route exact path="/">
                {/* <Home /> */}
            </Route>
            <Route path="/cnbc" render={() => <NewsCnbc />} />
            {/* <Route path="/republika" render={() => } />
            <Route path="/tempo" render={() => } />
            <Route path="/okezone" render={() => } />
            <Route path="/bbc" render={() => } /> */}
        </Switch>
    )
}
