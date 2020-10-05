import React from "react";
import Search from "views/settings";
import Forecast from "views/forecast";
import { SearchProvider } from "context/searchContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <SearchProvider>
                <div className="container-fluid mt-5">
                    <Switch>
                        <Route exact path="/">
                            <Forecast />
                        </Route>
                        <Route exact path="/settings">
                            <Search />
                        </Route>
                    </Switch>
                </div>
            </SearchProvider>
        </Router>
    );
}

export default App;
