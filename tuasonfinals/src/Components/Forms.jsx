import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function BasicExample() {
  const [ emailaddress, setemailaddress ] = useState('');
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email Address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={(e) => {setemailaddress(e.target.value)}} />
        <Form.Text>
          Enter your valid email.
          <h6>{emailaddress}</h6>
        </Form.Text>
      </Form.Group>
      <br/>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text>
          Forgot your password?
        </Form.Text>
      </Form.Group>
    </Form>
  );
}

export default BasicExample;