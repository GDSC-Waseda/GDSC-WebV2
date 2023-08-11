import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";

export const TeamsPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Teams",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Who Are We?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "everyone.png",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    {
      title: "Project Lead", // Added title
      image: "project_lead.jpg",
      size: "s",
    },
    {
      title: "Finance Lead",
      image: "finance_lead.jpg",
      size: "s",
    },
    {
      title: "Backend Lead",
      image: "backend_lead.png",
      size: "s",
    },
  ];

  return (
    <div className="team-page">
      <CommonMeta
        pageTitle={card.title}
        pageDescription={card.content}
        pagePath="team"
        pageImgWidth={1280}
        pageImgHeight={630}
      />
      <HeaderCard props={card} />
      <ImageCard props={imageCardProps} />
      <h1 className="members-title">Members</h1>
      <div className="team-cards-container">
        {teamCards.map((teamCard, index) => (
          <TeamCard
            key={index}
            props={teamCard} // Passing teamCard object as props
          />
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
