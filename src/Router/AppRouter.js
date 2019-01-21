import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import App from '../App'
import Services from '../components/Services'
import Contact from '../components/Contact'

const AppRouter = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/services" component={Services} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default AppRouter;