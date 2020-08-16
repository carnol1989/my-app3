import React from  'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import HelloWorld from '../components/hello-world'
import ByeByeWorld from '../components/bye-bye-world'
import { Navbar } from '../components/ui/Navbar'

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/hello-world" component={HelloWorld} />
                <Route exact path="/bye-bye-world" component={ByeByeWorld} />
            </Switch>
        </Router>
    )
}

export default AppRouter