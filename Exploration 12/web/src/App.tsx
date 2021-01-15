import React from 'react';
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import InputFieldHolder from './Components/InputFieldHolder';
import Navigation from './Components/Navigation';

const App = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/input">
                    <InputFieldHolder />
                </Route>
                <Route path="*">
                    <ErrorPage />
                </Route>
            </Switch>
        </Router>
    )
};

export default App;