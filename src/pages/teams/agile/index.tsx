import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { MemberType, memberAtributes } from "../../../types";

import {
  HeaderCardProps,
  ImageCardProps,
  TeamCardProps,
  TeamHeaderCardProps,
} from "~/types";

import TeamHeaderCard from "~/components/Cards/TeamHeaderCard";

import { GetStaticProps } from "next";

const STRAPI_API_URL =
  "https://agile-dawn-20856-3c917b85c4f4.herokuapp.com/api";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${STRAPI_API_URL}/members?populate=*`);
  const memberData: { data: MemberType[] } = await res.json();

  const dynamicTeamCards: TeamCardProps[] = memberData.data
    .filter((member) => member.attributes.team === "Agile") // Filter members who are part of the Agile team
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

interface AgileTeamProps {
  dynamicTeamCards: TeamCardProps[];
}

export const AgileTeam: NextPage<AgileTeamProps> = ({ dynamicTeamCards }) => {
  const card: TeamHeaderCardProps = {
    headTitle: "",
    title: "Agile Team",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do\n eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    featureList: [
      "Benifit of feature",
      "Benifit of feature",
      "Benifit of feature",
    ],
  };

  const imageCardProps: ImageCardProps = {
    title: "Agile Team - Lahiru Udawatta",
    content:
      "Hoi everyone 🙌, my name's Lahiru, and I'm honored to be the lead of the Agile team for GDSC Waseda. Our dynamic team uses the Agile methodology, infusing industry-oriented practices into our web development projects. The sleek website you're currently browsing is brought to you by my team ;). Excited to see what we can build this year with all of you!",
    image:
      "https://res.cloudinary.com/df3ab0lxf/image/upload/v1705303847/agile_lead_6946bcb022.png",
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

export default AgileTeam;
