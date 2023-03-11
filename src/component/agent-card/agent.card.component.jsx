import "./agent.card.styles.css";

const Card = ({ agent }) => {
  const {
    uuid,
    displayName,
    description,
    bustPortrait,
    isPlayableCharacter,
    background
  } = agent;

  return isPlayableCharacter === true ? (
    <div
      className="agent-card"
      key={uuid}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img alt={`Agent ${displayName}`} src={bustPortrait} />
      <h3 className="agent-name">{displayName}</h3>
      <p>{description}</p>
    </div>
  ) : (
    <></>
  );
};

export default Card;
