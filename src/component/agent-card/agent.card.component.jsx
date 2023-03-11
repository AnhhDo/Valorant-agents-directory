import "./agent.card.styles.css";

const Card = ({ agent }) => {
  const { uuid, displayName, description, bustPortrait, isPlayableCharacter } = agent;

  return isPlayableCharacter === true ? (
    <div className="agent-card" key={uuid}>
      <img alt={`Agent ${displayName}`} src={bustPortrait} />
      <h3>{displayName}</h3>
      <p>{description}</p>
    </div>
  ) : (
    <></>
  );
};

export default Card;
