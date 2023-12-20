import { useState } from "react";
import "./App.css";
import { AppProvider } from "./context/AppContext";
import ChartValue from "./components/CartValue";
import ExpanseList from "./components/ExpanseList";
import ItemSelected from "./components/ItemSelected";
import Location from "./components/Location";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <AppProvider>
        <div className="container">
          <h1 className="mt-3">Shopping App</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <ChartValue />
            </div>
            <div className="col-sm">
              <Location />
            </div>
          </div>
          <h3 className="mt-3">Shopping Cart</h3>
          <div className="row ">
            <div className="col-sm">
              <ExpanseList />
            </div>
          </div>
          <h3 className="mt-3">Add Items</h3>
          <div className="row mt-3">
            <div className="col-sm">
              <ItemSelected />
            </div>
          </div>
        </div>
      </AppProvider>
    </>
  );
}

export default App;
