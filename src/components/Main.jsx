import React from "react";
import { useState } from "react";

export default function Main() {
  //The following is the code of the setstate that updates the state using the previous value of the state using callback function or without a function
  // function add(){
  //   setCount(prevCount=>prevCount+1);
  //   setCount(prevCount=>prevCount+1);
  //   setCount(prevCount=>prevCount+1);
  // }
  // function add(){
  //   setCount(count+1);
  //   setCount(count+1);
  //   setCount(count+1);
  // }
  //both the setState function has the same logic for the operation but the second one will not be working properly as the second fuction gets acces to the value of the count thathas not been updated already
  //hence the first function will actually increase the count by 3 while the second function will just increase it by one

  //Toggling state
  //const [isGointOut, setIsGoingOut] = useState(true);
  //function handleClick(){
  //setIsGointOut(!isGointOut);
  // setIsGointOut(prevIsGointOut=>!prevIsGointOut);
  // }

  React.useState();
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsListItems = ingredients.map((ingredient, index) => {
    return <li key={index}> {ingredient} </li>;
  });

  // const [isImportant, setIsImportant] = React.useState("Yes");

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
    // ingredients.push(newIngredient);
    console.log(ingredients);
  }
  return (
    <main>
      <form onSubmit={handleSubmit} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add Ingredient"
          name="ingredient"
        />
        <button type="Submit">Add Ingredient</button>
      </form>
      <ul className="ingredient-list">{ingredientsListItems}</ul>
      <ul>
        {/* <li>{isImportant}</li> */}
      </ul>
    </main>
  );
}
