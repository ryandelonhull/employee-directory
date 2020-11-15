import react from "react";
import NavBar from "./components/NavBar.js";
import Search from "./components/Search.js";
import Table from "./components/Table.js";
import { dataRandos } from "./components/Data.js";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Search />
      <Table>
        <Data />
      </Table>
    </div>
  );
}

export default App;
