import {
  type Dispatch,
  type SetStateAction,
  useCallback,
  useEffect,
} from "react";
import Button from "./Button";

type ActionsProps = {
  expression: string;
  setExpression: Dispatch<SetStateAction<string>>;
  result: string;
  setResult: Dispatch<SetStateAction<string>>;
};

export default function Actions({
  expression,
  setExpression,
  result,
  setResult,
}: ActionsProps) {
  const addToExpression = (value: string) => {
    setExpression((ex) => `${ex}${value}`);
  };

  const addPerantesToExpression = (value: string) => {
    if (
      value === "(" &&
      (!isNaN(+expression[expression.length - 1]) ||
        expression[expression.length - 1] === ")")
    ) {
      setExpression((ex: string) => `${ex}*${value}`);
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
    if (expression === "") {
      setResult("0");
    }
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
  }, [expression, setResult]);

  const handleEqual = () => {
    calculate();
    setExpression(result);
  };

  useEffect(() => {
    calculate();
  }, [expression, calculate]);

  return (
    <div className="actions">
      <Button text="C" className="button-clear" action={clearExpressin} />
      <Button
        text="&#8617;"
        className="button-action button-back"
        action={handleBack}
      />
      <Button
        text="("
        className="button-action button-parantes-left"
        action={() => addPerantesToExpression("(")}
      />
      <Button
        text=")"
        className="button-action button-parantes-right"
        action={() => addPerantesToExpression(")")}
      />
      <Button
        text="^"
        className="button-action button-pow"
        action={() => addToExpression("**")}
      />
      <Button
        text="%"
        className="button-action button-percent"
        action={() => addToExpression("%")}
      />
      <Button
        text="/"
        className="button-action button-devide"
        action={() => addToExpression("/")}
      />
      <Button
        text="*"
        className="button-action button-times"
        action={() => addToExpression("*")}
      />
      <Button
        text="-"
        className="button-action button-mines"
        action={() => addToExpression("-")}
      />
      <Button
        text="+"
        className="button-action button-plus"
        action={() => addToExpression("+")}
      />
      <Button
        text="+/-"
        className="button-action button-reverce"
        action={addRevercetoExpersion}
      />
      <Button
        text="="
        className="button-action button-equal"
        action={handleEqual}
      />
      <Button
        text="."
        className="button-action button-dot"
        action={() => addToExpression(".")}
      />

      <Button
        text="9"
        className="button-9"
        action={() => addToExpression("9")}
      />
      <Button
        text="8"
        className="button-8"
        action={() => addToExpression("8")}
      />
      <Button
        text="7"
        className="button-7"
        action={() => addToExpression("7")}
      />
      <Button
        text="6"
        className="button-6"
        action={() => addToExpression("6")}
      />
      <Button
        text="5"
        className="button-5"
        action={() => addToExpression("5")}
      />
      <Button
        text="4"
        className="button-4"
        action={() => addToExpression("4")}
      />
      <Button
        text="3"
        className="button-3"
        action={() => addToExpression("3")}
      />
      <Button
        text="2"
        className="button-2"
        action={() => addToExpression("2")}
      />
      <Button
        text="1"
        className="button-1"
        action={() => addToExpression("1")}
      />
      <Button
        text="0"
        className="button-0"
        action={() => addToExpression("0")}
      />
      <Button
        text="00"
        className="button-00"
        action={() => addToExpression("00")}
      />
    </div>
  );
}
