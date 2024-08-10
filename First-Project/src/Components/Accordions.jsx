import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import './Accordions.css';

function Accordions() {
  return (
    <Container fluid className='body'>
      <Accordion className='A' defaultActiveKey="0">
        <Accordion.Item eventKey="1">
          <Accordion.Header className='header1'>使用須知:此平台服務項目</Accordion.Header>
          <Accordion.Body>
            此網站專門為聯大學生使用的二手書交易網站。
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header className='header2'>使用須知:註冊教學</Accordion.Header>
          <Accordion.Body>
            請使用聯大學生信箱進行註冊。
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header className='header3'>使用須知:使用方式</Accordion.Header>
          <Accordion.Body>
            此網站專門為聯大學生使用的二手書交易網站。
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header className='header4'>使用須知:小提示</Accordion.Header>
          <Accordion.Body>
            此網站專門為聯大學生使用的二手書交易網站。
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}

export default Accordions;
