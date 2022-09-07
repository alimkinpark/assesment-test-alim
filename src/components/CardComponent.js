import Card from 'react-bootstrap/Card';

function CardComponent({data}) {
  return (
    <Card>
      <Card.Body>{data.name}</Card.Body>
    </Card>
  );
}

export default CardComponent;