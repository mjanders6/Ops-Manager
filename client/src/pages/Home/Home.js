import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { Jumbotron } from 'reactstrap';

import AssetPage from '../Assets/Assets';
import Landing from '../Landing/Landing'

const Home = _ =>
    <>
        <Router>
            <div>
                <nav>
                    <Link to='/'>Home</Link>
                    <Link to='/Assets'>Assets</Link>
                    <Link to='/Projects'>Projects</Link>
                    <Link to='/Team'>Team</Link>
                    <Link to='/Scheduling'>Scheduling</Link>
                    <Link to='/Tasks'>Tasks</Link>
                    <Link to='/Training'>Training</Link>
                    <Link to='/UnscheduledMaintenance'>Unscheduled Maintenance</Link>
                </nav>
                <Route exact path='/' component={_ => <Landing />} />
                <Route exact path='/Assets' component={_ => <AssetPage />} />
                {/* <Route exact path='/Projects' component={_ => <AssetPage />} */}
                <Redirect to="/" />
            </div>
        </Router>
    </>
export default Home;