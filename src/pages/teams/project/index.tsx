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
    title: "Project Team - Priya ",
    content:
      "Hello everyone! I'm Priya, a third-year student at Waseda University, and the proud leader of the GDSC Waseda Club Project Team. Our group is a diverse mix of tech enthusiasts, event planners, and project management maestros. As part of the Google Developer Student Clubs, we strive to bridge classroom learning with hands-on projects, ensuring our members get the best of both worlds. Come and be a part of our journey as we learn, innovate, and grow together!",
    image: "everyone.png",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    {
      title: "Member 1",
      image: "project_lead.jpg",
      major: "Computer Science",
      school: "FSE",
      year: "4th year",
    },
    {
      title: "Member 2",
      image: "project_lead.jpg",
      major: "Physics",
      school: "ASE",
      year: "2nd year",
    },
    {
      title: "Member 3",
      image: "project_lead.jpg",
      major: "Politics and Econ",
      school: "PSE",
      year: "3rd year",
    },
    {
      title: "Member 4",
      image: "project_lead.jpg",
    },
    {
      title: "Member 3",
      image: "project_lead.jpg",
      major: "Politics and Econ",
      school: "PSE",
      year: "3rd year",
    },
    {
      title: "Member 3",
      image: "project_lead.jpg",
      major: "Politics and Econ",
      school: "PSE",
      year: "3rd year",
    },
    {
      title: "Member 3",
      image: "project_lead.jpg",
      major: "Politics and Econ",
      school: "PSE",
      year: "3rd year",
    },
    {
      title: "Member 3",
      image: "project_lead.jpg",
      major: "Politics and Econ",
      school: "PSE",
      year: "3rd year",
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
