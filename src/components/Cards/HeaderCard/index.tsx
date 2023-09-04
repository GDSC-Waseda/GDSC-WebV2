import Image from "next/image";
import { Col, Row, Card } from "react-bootstrap";

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
        <Row>
          <Col xs={2} style={{ textAlign: "end", alignSelf: "center" }}>
            <Image
              src="/tempImg/svg/logo-left.svg"
              className="headerCard__logoLeft"
              alt="logo-left"
              width={70}
              height={70}
            />
          </Col>
          <Col xs={8}>
            <Card.Text className="headerCard__title">{props.title}</Card.Text>
          </Col>
          <Col xs={2} style={{ alignSelf: "center" }}>
            <Image
              src="/tempImg/svg/logo-right.svg"
              className="headerCard__logoRight"
              alt="logo-right"
              width={70}
              height={70}
            />
          </Col>
        </Row>
      </div>
      {props.content !== undefined &&
        props.content.split("\n").map((text, key) => (
          <p key={key} className="headerCard__contents">
            {text}
          </p>
        ))}
    </Card>
  );
};

export default HeaderCard;
