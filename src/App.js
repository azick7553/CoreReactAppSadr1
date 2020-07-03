import React, { useState, useEffect } from "react";
import CardItem from "./components/card-item-components/card-component";
function App() {
  const initValues = [
    {
      id: 1,
      LastName: "LastTest1",
      FirstName: "FirstTest1",
    },
    {
      id: 2,
      LastName: "LastTest2",
      FirstName: "FirstTest2",
    },

    {
      id: 3,
      LastName: "LastTest3",
      FirstName: "FirstTest3",
    },
    {
      id: 4,
      LastName: "LastTest4",
      FirstName: "FirstTest4",
    },
  ];

  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(initValues);
  }, []); //Component Did Mount

  const ValueDeleteHandler = (id) => {
    const valList = values.filter((p) => p.id !== id);
    setValues(valList);
  };

  return (
    <div style={{ marginTop: 120 }}>
      {values.map((value) => {
        return <CardItem value={value} delete={ValueDeleteHandler} />;
      })}
    </div>
  );
}

export default App;
