import React, { Fragment } from "react";
import Product from "../Product";
import data from "../../mock.json";

const App = () => {
  const items = data.map((item) => (
    <Product buttonText="By on Click" key={item.id} {...item} />
  ));

  return <Fragment>{items}</Fragment>;
};

export default App;
