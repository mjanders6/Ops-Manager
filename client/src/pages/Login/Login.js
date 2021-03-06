import React, { Component } from 'react'
import { Jumbotron, Container, Row, Col, Button } from 'react-bootstrap'
import LoginForm from '../../components/Login/LoginForm'
import User from '../../utils/Users/Users'


class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            username: '',
            password: '',
            modal: false,
        }
        this.toggle = this.toggle.bind(this)
    }

    componentDidMount() {

    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    handleFormSubmit = event => {
        event.preventDefault()

        let email = this.state.email
        let username = this.state.username
        let password = this.state.password

        User.userLogin({ username, password })
            .then(({ data }) => {
                sessionStorage.setItem('userId', JSON.stringify(data.data._id))
                sessionStorage.setItem('status', JSON.stringify(data.data.status))
                sessionStorage.setItem('user', JSON.stringify(data.data))
                document.getElementById('loginForm').reset()
                this.setState(prevState => ({
                    modal: !prevState.modal
                }));
                console.log(data)
                window.location.reload();
            })
            .catch(e => console.error(e))
        }

    handleInputChange = event => {
        this.setState({ [event.target.id]: event.target.value })
    }

    render() {
        return (
            <>
                <Jumbotron fluid>
                    <Container fluid>
                        <Row>
                            <Col>
                                <h1 className="display-3">Login</h1>
                                <hr className="my-2" />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container>
                    <Row>
                        <Col>
                            {/* <Button id='login' color="primary" onClick={this.toggle}>Login</Button> */}
                            <LoginForm
                                handleInputChange={this.handleInputChange}
                                handleFormSubmit={this.handleFormSubmit}
                                email={this.email}
                                username={this.username}
                                password={this.password}
                                toggle={this.toggle}
                                modal={this.state.modal}
                            />
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default Login