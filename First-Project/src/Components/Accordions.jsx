import Accordion from 'react-bootstrap/Accordion';
import './Accordions.css';

function Accordions() {
  return (
    <div className='body'>
    <Accordion defaultActiveKey="">
      <Accordion.Item eventKey="0">
        <Accordion.Header>使用須知:1</Accordion.Header>
        <Accordion.Body>
          此網站專門為聯大學生使用的二手書交易網站。
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>使用須知:2</Accordion.Header>
        <Accordion.Body>
          請使用聯大學生信箱進行註冊。
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default Accordions;