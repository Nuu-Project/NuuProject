import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Cards.css';

function Cards() {
  // 創建包含12個(假設)卡片資料的陣列
  const cardData = Array.from({ length: 12 }, (_, i) => ({ //i+1 => _ = 1 以此類推
    title: `書名 ${i + 1}`, //書名，例如：書名 1
    text: `書名簡介 ${i + 1}.`, // 書名的簡單介紹，例如：書名簡介 1
  }));

  return (
    <div className='cards-container'>
      {cardData.map((card, x) => (
        <Card key={x} className='card-item'>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
              {card.text}
            </Card.Text>
            <Button variant="primary">前往了解</Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Cards;