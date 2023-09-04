import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";

export const ProjectTeams: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Project Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Project Team - Priya",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "everyone.png",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    {
      title: "Member 1",
      image: "project_lead.png",
    },
    {
      title: "Member 2",
      image: "project_lead.png",
    },
    {
      title: "Member 3",
      image: "project_lead.png",
    },
    {
      title: "Member 4",
      image: "project_lead.png",
    },
    {
      title: "Member 5",
      image: "project_lead.png",
    },
    {
      title: "Member 6",
      image: "project_lead.png",
    },
    {
      title: "Member 6",
      image: "project_lead.png",
    },
    {
      title: "Member 6",
      image: "project_lead.png",
    },
    {
      title: "Member 6",
      image: "project_lead.png",
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
      <div className="header-padding">
        <HeaderCard props={card} />
      </div>
      <ImageCard props={imageCardProps} />
      <h1 className="members-title">Members</h1>
      <div className="team-cards-container">
        {teamCards.map((teamCard, index) => (
          <TeamCard key={index} props={teamCard} />
        ))}
      </div>
    </div>
  );
};

export default ProjectTeams;
