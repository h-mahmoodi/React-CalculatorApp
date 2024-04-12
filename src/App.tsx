import { useState } from "react";

import "./App.css";
import Monitor from "./components/Monitor";
import Actions from "./components/Actions";

function App() {
  const [expression, setExpression] = useState<string>("");
  const [result, setResult] = useState<string>("0");

  return (
    <div className="container">
      <Monitor expression={expression} result={result} />

      <Actions
        expression={expression}
        setExpression={setExpression}
        result={result}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
