import React from "react";
import "../App.css";

export default function Recipe({ title, calories, image, ingredients }) {
  return (
    <div className="card">
      <h2 className="title">{title}</h2>
      <span>Calories: {calories.toFixed(2)}</span>

      <img src={image} alt={title} />

      <ul>
        <h3>Ingredients:</h3>
        {ingredients.map((ingredient) => (
          <li key={ingredient.text}>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}
