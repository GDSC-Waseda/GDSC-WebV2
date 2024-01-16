import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import {
  HeaderCardProps,
  ImageCardProps,
  TeamCardProps,
  TeamHeaderCardProps,
} from "~/types";
import TeamHeaderCard from "~/components/Cards/TeamHeaderCard";

import { GetStaticProps } from "next";
import { MemberType, memberAtributes } from "../../../types";

const STRAPI_API_URL =
  "https://agile-dawn-20856-3c917b85c4f4.herokuapp.com/api";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${STRAPI_API_URL}/members?populate=*`);
  const memberData: { data: MemberType[] } = await res.json();

  const dynamicTeamCards: TeamCardProps[] = memberData.data
    .filter((member) => member.attributes.team === "Backend") // Filter members who are part of the Agile team
    .map((member) => ({
      title: member.attributes.name || "No Name",
      image:
        member.attributes.memImage?.data?.attributes.url ||
        "/default-image-path.jpg",
      major: member.attributes.major || "No Major",
      school: member.attributes.school || "No School",
      year: member.attributes.year || "No Year",
    }));

  return { props: { dynamicTeamCards } };
};

interface BackendTeamProps {
  dynamicTeamCards: TeamCardProps[];
}

export const BackendTeam: NextPage<BackendTeamProps> = ({
  dynamicTeamCards,
}) => {
  const card: TeamHeaderCardProps = {
    headTitle: "",
    title: "Backend Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
    featureList: [
      "Benifit of feature",
      "Benifit of feature",
      "Benifit of feature",
    ],
  };

  const imageCardProps: ImageCardProps = {
    title: "Backend Team - Gunjan Srivastava",
    content:
      "Hello everyone! I’m Gunjan, a third year student at Waseda University studying Computer Science and Communications Engineering. In my team, I hope to drive development through implementation of creative solutions (and a little bit of ChatGPT). Together, let's push boundaries and unlock new possibilities, one step at a time!",
    image:
      "https://res.cloudinary.com/df3ab0lxf/image/upload/v1705310640/backend_lead_0c2dd9c14a.jpg",
    imagePosition: "left",
  };

  return (
    <div className="team-page">
      <CommonMeta
        pageTitle={card.title}
        pageDescription={card.content}
        pagePath="team"
        pageImgWidth={1280}
        pageImgHeight={630}
      />
      <div className="header-padding">
        <TeamHeaderCard props={card} />
      </div>
      <ImageCard props={imageCardProps} />
      <h1 className="members-title">Meet Our Team</h1>
      <div className="team-cards-container">
        {dynamicTeamCards.map((teamCard, index) => (
          <TeamCard key={index} props={teamCard} />
        ))}
      </div>
    </div>
  );
};

export default BackendTeam;
