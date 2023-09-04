import Image from "next/image";
import React, { useState } from "react";
import { TeamCardProps } from "~/types/index";

export const TeamCard: React.FC<{
  children?: React.ReactNode;
  props: TeamCardProps;
}> = ({ children, props }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="team-card">
      {props.image && (
        <div className="team-card__image-container">
          <Image
            className="team-card__image"
            src={require(`assets/img/${props.image}`)}
            alt="team-card"
            layout="intrinsic"
          />
        </div>
      )}
      <div className="team-card__detail-container">
        {props.title && (
          // Title is now clickable to toggle expanded content
          <div
            className="team-card__title"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {props.title}
            <span className="expand-icon">▼</span>{" "}
            {/* This is a simple downward arrow icon as an indicator */}
          </div>
        )}

        {isExpanded && (
          <div className="team-card__expanded-details">
            {props.major && <div>Major: {props.major}</div>}
            {props.school && <div>School: {props.school}</div>}
            {props.year && <div>Year: {props.year}</div>}
          </div>
        )}

        <div className="team-card__other">{children}</div>
      </div>
    </div>
  );
};

export default TeamCard;
