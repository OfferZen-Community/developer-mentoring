import React, { useState } from "react";
import style from "./style.module.css";

const Scenario = (props) => {
  const [revealMissingIngredient, setRevealMissingIngredient] = useState(false);
  const handleRevealMissingIngredient = () => {
    setRevealMissingIngredient((prev) => !prev);
  };

  return (
    <>
      {props.scenario}
      <button className={style.btn} onClick={handleRevealMissingIngredient}>
        {revealMissingIngredient
          ? "Hide Missing Ingredient..."
          : "Reveal Missing Ingredient..."}
      </button>
      {revealMissingIngredient ? props.missingIngredient : null}
    </>
  );
};

export default Scenario;
