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
    .filter((member) => member.attributes.team === "Marketing") // Filter members who are part of the Agile team
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

interface MarketingTeamProps {
  dynamicTeamCards: TeamCardProps[];
}
export const MarketingTeam: NextPage<MarketingTeamProps> = ({
  dynamicTeamCards,
}) => {
  const card: TeamHeaderCardProps = {
    headTitle: "",
    title: "Marketing Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Marketing Team - Seongjoon Park ",
    content:
      "Hi everyone! 😊 I’m Seongjoon, a junior year student at Waseda University's School of International Liberal Studies (SILS). Our Marketing Team at GDSC Waseda is all about promoting and spreading the word about the exciting tech events, workshops, and opportunities we have in store. From creating engaging content to utilizing social media and other marketing channels, we're dedicated to enhancing the GDSC Waseda brand and ensuring that students don't miss out on all the innovation and learning opportunities we offer.",
    image:
      "https://res.cloudinary.com/df3ab0lxf/image/upload/v1705310640/marketing_lead_c2ba9ee4ae.jpg",
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

export default MarketingTeam;
