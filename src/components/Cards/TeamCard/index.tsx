import React from "react";
import Link from "next/link";
import { Card, Image } from "react-bootstrap";

interface TeamCardProps {
  name: string;
  imgUrl: string;
  pageLink: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, imgUrl, pageLink }) => {
  return (
    <Link href={pageLink}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={imgUrl} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default TeamCard;
