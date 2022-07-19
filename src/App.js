import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { fetchCustomers } from "./asyncActions/customers";
import { addCustomerAction, removeCustomerAction } from "./store/customerReducer";
function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers)

  console.log(cash);

  const addCash = (cash) => {
    dispatch({type: "ADD_CASH", payload: cash})
  }

  const getCash = (cash) => {
    dispatch({type: "GET_CASH", payload: cash})
  }


  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }

  return (
    <div className="App">
      <div>{cash}</div>
      <button onClick={() => addCash(+prompt())}>Add cash</button>
      <button onClick={() => getCash(+prompt())}>Get cash</button>
      <button onClick={() => addCustomer(prompt())}>Add customer</button>
      <button onClick={() => dispatch(fetchCustomers())}>Get customers from database</button>
      {/* <button onClick={() => removeCustomer()}>Remove customer</button> */}

      
        {customers.length > 0 ?
          <div>
            {customers.map(customer =>
              <div 
              key={customer.id}
              onClick ={() => removeCustomer(customer)}
              >{customer.name}</div>  
            )}
          </div>
          :
          <div style={{fontSize: 24, marginTop: 20}}>
            No clients
          </div>
        }
    </div>
  );
}

export default App;
