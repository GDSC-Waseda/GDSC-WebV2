import Image from "next/image";
import React from "react";
import { TeamCardProps } from "~/types/index";

export const TeamCard: React.FC<{
  children?: React.ReactNode;
  props: TeamCardProps; // Using TeamCardProps
}> = ({ children, props }) => {
  return (
    <div className={`team-card ${props.size}`}>
      {" "}
      {/* Changed class name */}
      {props.image !== undefined ? (
        <div className={`team-card__image-container ${props.size}`}>
          <Image
            className={`team-card__image ${props.size}`}
            src={require(`assets/img/${props.image}`)}
            alt="team-card"
            layout="intrinsic"
          />
        </div>
      ) : (
        <div className={`team-card__image-container ${props.size} none`} />
      )}
      <div className="team-card__detail-container">
        {" "}
        {/* Changed class name */}
        {props.title !== undefined && (
          <div className="team-card__title">{props.title}</div>
        )}
        <div className={`team-card__other`}>
          {children !== undefined && children}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
