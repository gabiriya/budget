import { useState } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";

function App() {
 const [entries, setEntries] = useState(initialEntries);
 const deleteEntry = (id) => {
  const result = entries.filter((e) => e.id !== id);
  console.log(entries);
  console.log(result);
  setEntries(result);
 };

 const addEntry = (description, value, isExpense) => {
  const result = entries.concat({
   id: entries.length + 1,
   description,
   value,
   isExpense,
  });
  setEntries(result);
 };
 return (
  <Container>
   <MainHeader title="Budget" type="h1" />

   <DisplayBalance label="Your Balance:" value="2,454.12" size="small" />
   <DisplayBalances />

   <MainHeader type="h3" title="History" />

   <EntryLines entries={entries} deleteEntry={deleteEntry} />

   <MainHeader type="h3" title="Add new transaction" />
   <NewEntryForm addEntry={addEntry} />
  </Container>
 );
}

export default App;

var initialEntries = [
 {
  id: 1,
  description: "Work income",
  value: "100.00",
  isExpense: false,
 },
 {
  id: 2,
  description: "Water bill",
  value: "20",
  isExpense: true,
 },
 {
  id: 3,
  description: "Rent",
  value: "300.00",
  isExpense: true,
 },
 {
  id: 4,
  description: "Power bill",
  value: "50",
  isExpense: true,
 },
];
