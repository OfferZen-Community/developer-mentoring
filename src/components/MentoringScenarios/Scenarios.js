import React from "react";
import Scenario from "./Scenario";
import _Scenario1 from "./partials/_scenario1.mdx";
import __Scenario1_missingIngredient from "./partials/_scenario1_missingIngredient.mdx";
import _Scenario2 from "./partials/_scenario2.mdx";
import __Scenario2_missingIngredient from "./partials/_scenario2_missingIngredient.mdx";
import _Scenario3 from "./partials/_scenario3.mdx";
import __Scenario3_missingIngredient from "./partials/_scenario3_missingIngredient.mdx";
import _Scenario4 from "./partials/_scenario4.mdx";
import __Scenario4_missingIngredient from "./partials/_scenario4_missingIngredient.mdx";

const Scenarios = () => {
  const data = [
    {
      scenario: <_Scenario1 />,
      missingIngredient: <__Scenario1_missingIngredient />,
    },
    {
      scenario: <_Scenario2 />,
      missingIngredient: <__Scenario2_missingIngredient />,
    },
    {
      scenario: <_Scenario3 />,
      missingIngredient: <__Scenario3_missingIngredient />,
    },
    {
      scenario: <_Scenario4 />,
      missingIngredient: <__Scenario4_missingIngredient />,
    },
  ];

  const scenarios = data.map((scenario, i) => {
    return (
      <Scenario
        key={i}
        scenario={scenario.scenario}
        missingIngredient={scenario.missingIngredient}
      />
    );
  });

  return <>{scenarios}</>;
};

export default Scenarios;
