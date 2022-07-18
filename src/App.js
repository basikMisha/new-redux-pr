import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash);
  console.log(cash);

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={() => addCash(+prompt())}>Add cash</button>
      <button onClick={() => getCash(+prompt())}>Get cash</button>
    </div>
  );
}

export default App;
