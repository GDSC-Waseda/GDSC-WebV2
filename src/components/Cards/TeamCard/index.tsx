import React, { useState } from "react";
import Image from "next/image";
import { TeamCardProps } from "~/types/index";

export const TeamCard: React.FC<{
  children?: React.ReactNode;
  props: TeamCardProps;
}> = ({ children, props }) => {
  return (
    <div className="team-card">
      {props.image !== undefined ? (
        <div className="team-card__image-container">
          <Image
            className="team-card__image"
            src={`/tempImg/leads/${props.image}`}
            alt="team-card"
            layout="intrinsic"
          />
        </div>
      ) : (
        <div className="team-card__image-container none" />
      )}
      <div className="team-card__detail-container">
        {props.title !== undefined && (
          <div className="team-card__title">{props.title}</div>
        )}
        <div className="team-card__expanded-details">
          <p>{props.major}</p>
          <p>
            {props.school}, {props.year}
          </p>
        </div>
        <div className="team-card__other">
          {children !== undefined && children}
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
