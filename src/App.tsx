import { useCallback, useEffect, useState } from "react";

import "./App.css";

function App() {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<string>("0");

  const addToExpression = (value: string) => {
    setExpression((ex) => `${ex}${value}`);
  };

  const addPerantesToExpression = (value: string) => {
    if (
      value === "(" &&
      (!isNaN(+expression[expression.length - 1]) ||
        expression[expression.length - 1] === ")")
    ) {
      setExpression((ex) => `${ex}*${value}`);
    }
    // else if (value === ")" && isNaN(+expression[expression.length - 1])) {
    //   setExpression((ex) => `${ex.slice(0, -1)}${value}`);
    // }
    else {
      setExpression((ex) => `${ex}${value}`);
    }
  };

  const addRevercetoExpersion = () => {
    setExpression((ex) => `${ex}(-`);
  };

  const clearExpressin = () => {
    setExpression("");
    setResult("0");
  };

  const handleBack = () => {
    setExpression((ex) => ex.slice(0, -1));
  };

  const calculate = useCallback(() => {
    try {
      if (expression !== "") {
        const value = eval(expression);
        if (value % 1 === 0) {
          setResult(value.toString());
        } else {
          setResult(value.toFixed(8).toString());
        }
      }
    } catch (e: unknown) {
      console.log((e as Error).message);
    }
  }, [expression]);

  const handleEqual = () => {
    calculate();
    setExpression(result);
  };

  useEffect(() => {
    calculate();
  }, [expression, calculate]);

  return (
    <div className="container">
      <div className="monitor">
        <div className="monitor-calc">{expression}</div>
        <div className="monitor-result">{result}</div>
      </div>
      <div className="actions">
        <button className="button button-clear" onClick={clearExpressin}>
          C
        </button>
        <button
          className="button button-action button-back"
          onClick={handleBack}
        >
          &#8617;
        </button>
        <button
          className="button button-action button-parantes-left"
          onClick={() => addPerantesToExpression("(")}
        >
          (
        </button>
        <button
          className="button button-action button-parantes-right"
          onClick={() => addPerantesToExpression(")")}
        >
          )
        </button>
        <button
          className="button button-action button-pow"
          onClick={() => addToExpression("**")}
        >
          ^
        </button>
        <button
          className="button button-action button-percent"
          onClick={() => addToExpression("%")}
        >
          %
        </button>
        <button
          className="button button-action button-devide"
          onClick={() => addToExpression("/")}
        >
          /
        </button>
        <button
          className="button button-action button-times"
          onClick={() => addToExpression("*")}
        >
          *
        </button>
        <button
          className="button button-action button-mines"
          onClick={() => addToExpression("-")}
        >
          -
        </button>
        <button
          className="button button-action button-plus"
          onClick={() => addToExpression("+")}
        >
          +
        </button>
        <button
          className="button button-action button-reverce"
          onClick={addRevercetoExpersion}
        >
          +/-
        </button>
        <button
          className="button button-action button-equal"
          onClick={handleEqual}
        >
          =
        </button>
        <button
          className="button button-dot"
          onClick={() => addToExpression(".")}
        >
          .
        </button>
        <button
          className="button button-9"
          onClick={() => addToExpression("9")}
        >
          9
        </button>
        <button
          className="button button-8"
          onClick={() => addToExpression("8")}
        >
          8
        </button>
        <button
          className="button button-7"
          onClick={() => addToExpression("7")}
        >
          7
        </button>
        <button
          className="button button-6"
          onClick={() => addToExpression("6")}
        >
          6
        </button>
        <button
          className="button button-5"
          onClick={() => addToExpression("5")}
        >
          5
        </button>
        <button
          className="button button-4"
          onClick={() => addToExpression("4")}
        >
          4
        </button>
        <button
          className="button button-3"
          onClick={() => addToExpression("3")}
        >
          3
        </button>
        <button
          className="button button-2"
          onClick={() => addToExpression("2")}
        >
          2
        </button>
        <button
          className="button button-1"
          onClick={() => addToExpression("1")}
        >
          1
        </button>
        <button
          className="button button-0"
          onClick={() => addToExpression("0")}
        >
          0
        </button>
        <button
          className="button button-00"
          onClick={() => addToExpression("00")}
        >
          00
        </button>
      </div>
    </div>
  );
}

export default App;
