import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './Validations.css';

function Validations() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <Form className='body1' noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
      <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>驗證信箱</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control className='user'
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose your email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>密碼</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Password"
            defaultValue=""
          />
          <Form.Control.Feedback type="invalid">
            Please provide your password.
          </Form.Control.Feedback>
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>驗證信箱</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose your email.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group> */}
      {/* </Row>
      <Row className="mb-3"> */}
        {/* <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group> */}
        {/* <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group> */}
        <Form.Group as={Col} md="4" controlId="validationCustom05">
          <Form.Label>用戶名稱</Form.Label>
          <Form.Control type="text" placeholder="username" required />
          <Form.Control.Feedback type="invalid">
            Please provide your username.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="以上資料確認檢查無誤"
          feedback="檢查無誤請勾起確認欄"
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">確定註冊</Button>
    </Form>
  );
}

export default Validations;