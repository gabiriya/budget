import { useState, useEffect } from "react";
import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";
import EntryLines from "./components/EntryLines";
import MainHeader from "./components/MainHeader";
import ModalEdit from "./components/ModalEdit";
import NewEntryForm from "./components/NewEntryForm";

function App() {
 const [entries, setEntries] = useState(initialEntries);
 const [description, setDescription] = useState("");
 const [value, setValue] = useState("");
 const [isExpense, setIsExpense] = useState(true);
 const [isOpen, setIsOpen] = useState(false);
 const [entryID, setEntryID] = useState();
 const [totalIncome, setTotalIncome] = useState(0);
 const [totalExpenses, setTotalExpenses] = useState(0);
 const [total, setTotal] = useState(0);

 useEffect(() => {
  if (!isOpen && entryID) {
   const index = entries.findIndex((entry) => entry.id === entryID);
   const newEntries = [...entries];
   newEntries[index].description = description;
   newEntries[index].value = value;
   newEntries[index].isExpense = isExpense;
   setEntries(newEntries);
   resetEntry();
  }
 }, [isOpen]);

 useEffect(() => {
  let totalIncome = 0;
  let totalExpenses = 0;
  entries.map((e) => {
   if (e.isExpense) return (totalExpenses += Number(e.value));
   else return (totalIncome += Number(e.value));
  });
  console.log(`total income : ${totalIncome}`);
  console.log(`total expenses : ${totalExpenses}`);
  let total = totalIncome - totalExpenses;
  setTotal(totalIncome - totalExpenses);
  setTotalIncome(totalIncome);
  setTotalExpenses(totalExpenses);
 }, [entries]);

 const deleteEntry = (id) => {
  const result = entries.filter((e) => e.id !== id);
  setEntries(result);
 };

 const editEntry = (id) => {
  if (id) {
   const index = entries.findIndex((entry) => entry.id === id);
   const entry = entries[index];
   setEntryID(id);
   setDescription(entry.description);
   setValue(entry.value);
   setIsExpense(entry.isExpense);
   setIsOpen(true);
  }
 };

 const addEntry = () => {
  const result = entries.concat({
   id: entries.length + 1,
   description,
   value,
   isExpense,
  });
  setEntries(result);
  resetEntry();
 };

 function resetEntry() {
  setDescription("");
  setValue("");
  setIsExpense(true);
 }

 return (
  <Container>
   <MainHeader title="Budget" type="h1" />

   <DisplayBalance label="Your Balance:" value={total} size="small" />
   <DisplayBalances totalExpenses={totalExpenses} totalIncome={totalIncome} />

   <MainHeader type="h3" title="History" />

   <EntryLines
    entries={entries}
    deleteEntry={deleteEntry}
    editEntry={editEntry}
   />

   <MainHeader type="h3" title="Add new transaction" />
   <NewEntryForm
    addEntry={addEntry}
    description={description}
    value={value}
    isExpense={isExpense}
    setValue={setValue}
    setDescription={setDescription}
    setIsExpense={setIsExpense}
   />
   <ModalEdit
    isOpen={isOpen}
    setIsOpen={setIsOpen}
    addEntry={addEntry}
    description={description}
    value={value}
    isExpense={isExpense}
    setValue={setValue}
    setDescription={setDescription}
    setIsExpense={setIsExpense}
   />
  </Container>
 );
}

export default App;

var initialEntries = [
 {
  id: 10,
  description: "Work income",
  value: 100.0,
  isExpense: false,
 },
 {
  id: 20,
  description: "Water bill",
  value: 20,
  isExpense: true,
 },
 {
  id: 30,
  description: "Rent",
  value: 300.0,
  isExpense: true,
 },
 {
  id: 40,
  description: "Power bill",
  value: 50,
  isExpense: true,
 },
];
