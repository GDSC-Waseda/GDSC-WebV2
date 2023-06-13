import React from "react";

interface Team {
  name: string;
  leader: {
    name: string;
    role: string;
    description: string;
    photo: string;
    open: boolean;
  };
}

interface TeamCardProps {
  team: Team;
}

const TeamCard: React.FC<TeamCardProps> = ({ team }) => {
  const imagePath = team.leader.photo;

  return (
    <div className="team-card">
      <div className="team-card__image-container">
        {team.leader.photo && (
          <img className="team-card__image" src={imagePath} alt={team.name} />
        )}
      </div>
      <div className="team-card__content">
        <h3 className="team-card__title">{team.leader.name}</h3>
        <p className="team-card__role">{team.leader.role}</p>
        <p className="team-card__description">{team.leader.description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
