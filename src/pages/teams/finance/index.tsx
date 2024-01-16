import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { ImageCardProps, TeamCardProps, TeamHeaderCardProps } from "~/types";
import TeamHeaderCard from "~/components/Cards/TeamHeaderCard";

import { GetStaticProps } from "next";
import { MemberType, memberAtributes } from "../../../types";

const STRAPI_API_URL =
  "https://agile-dawn-20856-3c917b85c4f4.herokuapp.com/api";

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${STRAPI_API_URL}/members?populate=*`);
  const memberData: { data: MemberType[] } = await res.json();

  const dynamicTeamCards: TeamCardProps[] = memberData.data
    .filter((member) => member.attributes.team === "Finance") // Filter members who are part of the Agile team
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

interface FinanceTeamProps {
  dynamicTeamCards: TeamCardProps[];
}

export const FinanceTeam: NextPage<FinanceTeamProps> = ({
  dynamicTeamCards,
}) => {
  const card: TeamHeaderCardProps = {
    headTitle: "",
    title: "Finance Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Finance Team - Hyonjoon Park ",
    content:
      "Hey there! 😊 I'm Hyonjoon, a junior at Waseda University's School of International Liberal Studies (SILS). I'm thrilled to serve as the team lead for GDSC Waseda's Finance Team this year. Our team plays a vital role in managing and optimizing project finances, ensuring the success of our tech initiatives. I'm looking forward to a fantastic year ahead and can't wait to collaborate with you and our GDSC community to achieve great things together!",
    image:
      "https://res.cloudinary.com/df3ab0lxf/image/upload/v1705310640/finance_lead_01e311e8d8.jpg",
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

export default FinanceTeam;
