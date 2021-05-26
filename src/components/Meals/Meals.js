import React from "react";
import MealsSummary from "../Meals/MealsSummary";
import AvailableMeals from "../Meals/AvailableMeals";

const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
