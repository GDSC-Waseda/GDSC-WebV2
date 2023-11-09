import Image from "next/image";
import { Col, Row, Card } from "react-bootstrap";

import LogoLeft from "assets/svg/logo-left.svg";
import LogoRight from "assets/svg/logo-right.svg";
import { HeaderCardProps } from "~/types/index";

export const HeaderCard: React.FC<{ props: HeaderCardProps }> = ({ props }) => {
  return (
    <Card className="headerCard">
      {props.headTitle !== undefined && (
        <Card.Title className="headerCard__headerTitle">
          {props.headTitle}
        </Card.Title>
      )}
      <div className="headerCard__container">
        <Card.Text className="headerCard__title">{props.title}</Card.Text>
      </div>
      {props.content !== undefined &&
        props.content.split("\n").map((text, key) => (
          <p key={key} className="headerCard__contents">
            {text}
          </p>
        ))}
      {props.button && (
        <div className="headerCard__button">
          <text className="text">Discover</text>
        </div>
      )}
    </Card>
  );
};

export default HeaderCard;
