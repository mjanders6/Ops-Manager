import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col, Button, Modal, ModalBody, ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = ({ handleInputChange, handleFormSubmit, email, toggle, modal, username, password }) => {
  return (
    <>
      {/* <Button color="primary" onClick={toggle}>Add PO</Button> */}
      <Form id='loginForm' className='login-form'>
        <FormGroup row>
          <Col xs={12} sm={4} lg={4}>
            <Row>
              <Label htmlFor="username">User Name:</Label>
              <Input id="username" type="text" name="search" value={username} onChange={handleInputChange} />
            </Row>
            <Row>
              <Label htmlFor="password">Password:</Label>
              <Input id="password" type="text" name="search" value={password} onChange={handleInputChange} />
            </Row>
          </Col>
        </FormGroup>

        <Button color="primary" onClick={handleFormSubmit}>Login</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </Form>
    </>
  )
}
export default LoginForm 