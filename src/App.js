import { useState, useEffect } from "react";
import axios from "axios";
import List from "./component/card-list/list.component";
import "./App.css";
import SearchBar from "./component/search-bar/search-bar";
import DropDown from "./component/drop-down-menu/drop-down-menu";

const App = () => {
  const [agents, setAgent] = useState([]);
  const [filteredAgents, setFilteredAgent] = useState([]);

  useEffect(() => {
    axios.get("https://valorant-api.com/v1/agents")
      .then((response) => {setAgent(response.data.data)
      console.log(response)});
  }, []);

  useEffect(()=>{
    setFilteredAgent(agents);
  },[agents])

  const handleInputChange = (event) => {
    const inputName = event.target.value.toLowerCase();
    setFilteredAgent(
      agents.filter(({displayName}) => displayName.toLowerCase().includes(inputName))
    );
  };

  const sortByName = () => {
    const sorted = filteredAgents.sort();
    console.log(sorted)
  }

  return (
    <div className="App">
      <h1>Valorant agent</h1>
      <SearchBar handleInputChange={handleInputChange}></SearchBar>
      <DropDown sortByName={sortByName}></DropDown>
      <List agents={filteredAgents} />
    </div>
  );
};

export default App;
