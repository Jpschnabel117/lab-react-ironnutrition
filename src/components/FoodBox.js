import { Card, Col, Button } from 'antd';
function FoodBox(props) {
  return (
    <Card
      title={props.food.name}
      style={{ width: 250, height: 350, margin: 20 }}
    >
      <img src={props.food.image} height={100} alt="food" />
      <p>Calories: {props.food.calories}</p>
      <p>Servings: {props.food.servings}</p>
      <h3>Total Calories: {props.food.servings * props.food.calories}</h3>
      <Button onClick={() => props.deleteThing(props.food.name)}> Delete </Button>
    </Card>
  );
}

export default FoodBox;
