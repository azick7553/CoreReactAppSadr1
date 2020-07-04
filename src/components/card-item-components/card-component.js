import React from "react";
import { Card, Button, Icon } from "semantic-ui-react";

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
        <Button
          animated
          color="red"
          floated="right"
          onClick={() => props.delete(value.id)}
        >
          <Button.Content visible>Delete</Button.Content>
          <Button.Content hidden>
            <Icon name="trash alternate outline" />
          </Button.Content>
        </Button>
      </Card.Content>
    </Card>
  );
};
export default CardItem;
