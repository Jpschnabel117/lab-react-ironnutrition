import logo from './logo.svg';
import './App.css';
import foods from './foods.json';
import { useState } from 'react';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import { Card, Col, Button } from 'antd';
import Search from './components/Search';

function App() {
  const [initialFoodList, setInitialFoodList] = useState(foods);
  const [searchedLIST, setSearchedLIST] = useState(foods);
  const addNewFood = (newFood) => {
    const updatedFoodList = [...initialFoodList, newFood];
    setInitialFoodList(updatedFoodList);
  };
  const searchList = (term) => {
    // if (term === '') {
    //   setSearchedLIST(initialFoodList);
    // } else {
      const searchedList = initialFoodList.filter((element) => {
        return element.name.toLowerCase().includes(term.toLowerCase());
      });
      setSearchedLIST(searchedList);
    // }
  };
  const deleteIt = (nameToDelete) => {
    const updatedList = initialFoodList.filter((element)=>{
      return element.name !== nameToDelete
    })
    setInitialFoodList(updatedList);
    setSearchedLIST(updatedList);
  }

  return (
    <div className="App">
      <Search search={searchList} />
      <AddFoodForm addFood={addNewFood} />
      {searchedLIST.map((element) => {
        return (
          <div>
            <Col className="foodBox">
              <FoodBox
                food={{
                  name: element.name,
                  calories: element.calories,
                  image: element.image,
                  servings: element.servings,
                }}
                deleteThing = {deleteIt}
              />
            </Col>
          </div>
        );
      })}
    </div>
  );
}

export default App;
