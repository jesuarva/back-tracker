import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';

const ListDetails = ({ details }) => {
  console.log(details);
  const { name, email, bags } = details;
  name.toLowerCase();

  return (
    <div className="col-12 col-sm-6 col-md-4">
      <Card body>
        <CardTitle>{name.charAt(0).toUpperCase() + name.slice(1)}</CardTitle>
        <CardText>{`Email: ${email}`}</CardText>
        <CardText>{`Bags: ${bags}`}</CardText>
        <Button>Remove</Button>
      </Card>
    </div>
  );
};

export default ListDetails;
