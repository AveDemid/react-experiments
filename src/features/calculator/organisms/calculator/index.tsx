import React, { useState, MouseEvent } from "react";

import { Grid } from "./../../atoms";
import { Buttons, Display } from "./../../molecules";

import { isNumber } from "./../../lib/is-number";
import { isOperator } from "./../../lib/is-operator";

const initialState = {
  formula: [] as string[],
  input: "0"
};

export const Calculator = () => {
  const [state, setState] = useState(initialState);

  const onDigitClick = ({ currentTarget }: MouseEvent<HTMLDivElement>) => {
    const digit = currentTarget.innerText;
    const input = state.input;

    if (input.length < 10) {
      if (input === "0") {
        setState(prevState => ({
          ...prevState,
          input: digit
        }));
      } else if (!isNumber(input)) {
        setState(prevState => ({
          ...prevState,
          input: digit,
          formula: prevState.formula.concat(input)
        }));
      } else {
        setState(prevState => ({
          ...prevState,
          input: prevState.input.concat(digit)
        }));
      }
    }
  };

  const onDecimalClick = ({ currentTarget }: MouseEvent<HTMLDivElement>) => {
    const decimal = currentTarget.innerText;
    const input = state.input;

    if (!input.includes(decimal)) {
      setState(prevState => ({
        ...prevState,
        input: prevState.input.concat(decimal)
      }));
    }
  };

  const onOperatorClick = ({ currentTarget }: MouseEvent<HTMLDivElement>) => {
    const operator = currentTarget.innerText;
    const input = state.input;

    if (isOperator(input)) {
      setState(prevState => ({
        ...prevState,
        input: operator
      }));
    } else {
      setState(prevState => ({
        ...prevState,
        formula: prevState.formula.concat(input),
        input: operator
      }));
    }
  };

  const onEqualClick = () => {
    const formula = state.formula;
    const input = state.input;

    let finalFormula;

    if (isNumber(input)) {
      finalFormula = formula.concat(input);
    } else {
      finalFormula = formula;
    }

    try {
      const result = eval(finalFormula.join(""));

      setState({
        formula: [],
        input: result.toString()
      });
    } catch (e) {
      console.error(e);
    }
  };

  const onClearClick = () => {
    setState(initialState);
  };

  return (
    <Grid>
      <Display output={state.input} />
      <Buttons
        onDigitClick={onDigitClick}
        onOperatorClick={onOperatorClick}
        onDecimalClick={onDecimalClick}
        onEqualClick={onEqualClick}
        onClearClick={onClearClick}
      ></Buttons>
    </Grid>
  );
};
