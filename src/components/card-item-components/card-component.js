import React from "react";
import { Card, Button } from "semantic-ui-react";

const CardItem = (props) => {
  const { value } = props;
  return (
    <Card key={value.id}>
      <Card.Content>
        <Card.Header>{value.LastName}</Card.Header>
        <Card.Meta>
          <span>{value.FirstName}</span>
        </Card.Meta>
        <Card.Description>
          {/* Matthew is a musician living in Nashville. */}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button onClick={() => props.delete(value.id)} color="red">
          Delete
        </Button>
      </Card.Content>
    </Card>
  );
};
export default CardItem;
