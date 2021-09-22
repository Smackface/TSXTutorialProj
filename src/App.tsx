import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./components/list";
import AddToList from "./components/AddToList";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Jacob Mathison",
      url: "https://mathisonprojects.com/images/jacob.jpeg?c61b436feac8e596fff08b0855cb3511",
      age: 32,
      note: "What a guy"
    }
  ]);


  return (
    <div className="App">
      <h1>People invited to my Party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
