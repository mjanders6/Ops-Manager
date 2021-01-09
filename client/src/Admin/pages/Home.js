import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import './styles.css'

const Home = _ =>
<>
    <Router>
        <div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/'>Assets</Link>
                <Link to='/'>Projects</Link>
                <Link to='/'>Team</Link>
                <Link to='/'>Scheduling</Link>
                <Link to='/'>Tasks</Link>
                <Link to='/'>Training</Link>
                <Link to='/'>Unscheduled Maintenance</Link>
            </nav>
            {/* <Route exact path='/' component={_ => <Home />} /> */}
            {/* <Route exact path='/AddPO' component={_ => <AddPO />} /> */}
            <Redirect to="/" />
        </div>
    </Router>

<Jumbotron fluid>
    <Container>
        <h1>Admin Home</h1>
        <p>This is to setup file directories to initialize the project.</p>
    </Container>
</Jumbotron>
</>
export default Home;