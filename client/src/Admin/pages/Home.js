import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './styles.css'

import AssetPage from '../../pages/Assets/Assets';

const Home = _ =>
<>
    <Router>
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/Assets'>Assets</Link>
                <Link to='/'>Projects</Link>
                <Link to='/'>Team</Link>
                <Link to='/'>Scheduling</Link>
                <Link to='/'>Tasks</Link>
                <Link to='/'>Training</Link>
                <Link to='/'>Unscheduled Maintenance</Link>
            </nav>
            {/* <Route exact path='/' component={_ => <Home />} /> */}
            <Route exact path='/Assets' component={_ => <AssetPage />} />
            <Redirect to="/" />
        </div>
    </Router>
</>
export default Home;