import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Sign_ins.css';

function Sign_ins() {
  return (
    <Form className='body2'>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>信箱</Form.Label>
        <Form.Control className='Email' type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          請輸入註冊的聯大信箱
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>密碼</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="確認" />
      </Form.Group>
      <Button variant="primary" type="submit">
        登入
      </Button>
    </Form>
  );
}

export default Sign_ins;