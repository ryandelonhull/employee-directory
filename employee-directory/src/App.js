import react from "react";
import navBar from "./components/navBar";
import search from "./components/search";
import table from "./components/table";
import { dataEmployees } from "./components/data";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <navBar />
      <search />
      <table>
        <data />
      </table>
    </div>
  );
}

export default App;
