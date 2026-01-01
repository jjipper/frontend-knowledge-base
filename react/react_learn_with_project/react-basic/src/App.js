import { Fragment } from "react";

function App() {
  const number = 1;

  const double = (number) => {
    return number * 2;
  };

  return (
    <Fragment>
      <div>{double(number)}</div>
      <button>Submit</button>
    </Fragment>
  );
}

export default App;
