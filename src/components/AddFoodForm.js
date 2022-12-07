import { useState } from 'react';
function AddFoodForm(props) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = (e) => setName(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handleCaloriesInput = (e) => setCalories(e.target.value);

  const handleServingsInput = (e) => setServings(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { name, image, calories, servings };

    console.log('Submitted: ', newFood);
    props.addFood(newFood)

    setName("")
    setImage("")
    setCalories(0)
    setServings(0)
  };

  return (
    <div>
      <h1>ADD FOOD</h1>
      <form onSubmit={handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameInput}
        />
        <br />
        <label>Image: </label>
        <input
          type="text"
          name="image"
          value={image}
          onChange={handleImageInput}
        />
        <br />
        <label>Calories: </label>
        <input
          type="number"
          name="calories"
          value={calories}
          onChange={handleCaloriesInput}
        />
        <br />
        <label>Servings: </label>
        <input
          type="number"
          name="servings"
          value={servings}
          onChange={handleServingsInput}
        />
        <br />
        <button type="submit">Submit Food</button>
      </form>
    </div>
  );
}
export default AddFoodForm;
