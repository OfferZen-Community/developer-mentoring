import React, { useState } from "react";
import style from "./style.module.css";

const Scenario = (props) => {
  const [revealMissingIngredient, setRevealMissingIngredient] = useState(false);
  const handleRevealMissingIngredient = () => {
    setRevealMissingIngredient((prev) => !prev);
  };

  return (
    <>
      {/* <_Scenario1 /> */}
      {props.scenario}
      <button
        // className="btn btn-primary inline-flex items-center ml-1 rounded-md border hover:no-underline"
        // style={{ marginBottom: "var(--ifm-leading)" }}
        className={style.btn}
        onClick={handleRevealMissingIngredient}
      >
        {revealMissingIngredient
          ? "Hide Missing Ingredient..."
          : "Reveal Missing Ingredient..."}
      </button>
      {revealMissingIngredient ? props.missingIngredient : null}
    </>
  );
};

export default Scenario;
