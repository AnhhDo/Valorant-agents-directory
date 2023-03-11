import "./list.styles.css";
import Card from "../agent-card/agent.card.component";

const List = ({ agents }) => {
  return (
    <div className="card-list">
      {agents.map((agents) => {
        return <Card agent={agents} key={agents.uuid}/>;
      })}
    </div>
  );
};

export default List;
