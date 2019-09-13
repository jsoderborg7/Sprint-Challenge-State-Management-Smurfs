
import React from 'react';
import {Card} from 'semantic-ui-react';

const SmurfCard = props =>{
  console.log("smurf card", props);
  return(
    <Card className="cardContainer">
      <Card.Content className="contentContainer">
        <Card.Header className="name">{props.name}</Card.Header>
        <Card.Meta className="age">Age: {props.age}</Card.Meta>
        <Card.Description className="height">Height: {props.height}</Card.Description>
        <Card.Description className="id">ID: {props.id}</Card.Description>
      </Card.Content>
    </Card>
  )
}

export default SmurfCard;