import { useState, useEffect } from "react";
import List from "./component/card-list/list.component";
import "./App.css";

const App = () => {
  const [agents, setAgent] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((response) => setAgent(response.data));
  }, []);
  console.log(agents);
  return (<div className="App">
    <List agents={agents} />
  </div>)
};

export default App;
