import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";

export const BackendTeam: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Backend Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Backend Team - Gunjan ",
    content:
      "Hello everyone! I'm Priya, a third-year student at Waseda University, and the proud leader of the Project Team. Our group is a diverse mix of tech enthusiasts, event planners, and project management maestros. As part of the Google Developer Student Clubs, we strive to bridge classroom learning with hands-on projects, ensuring our members get the best of both worlds. Come and be a part of our journey as we learn, innovate, and grow together!",
    image: "priya.png",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    {
      title: "Lahiru",
      image: "project_lead.jpg",
      major: "Computer Science",
      school: "FSE",
      year: "4th year",
    },
    {
      title: "Tazkya",
      image: "project_lead.jpg",
      major: "Physics",
      school: "ASE",
      year: "2nd year",
    },
    {
      title: "Haru",
      image: "project_lead.jpg",
      major: "Politics and Econ",
      school: "PSE",
      year: "3rd year",
    },
    {
      title: "Gun",
      image: "project_lead.jpg",
      major: "Civil Eng",
      school: "CSE",
      year: "2nd year",
    },
    {
      title: "Bea",
      image: "project_lead.jpg",
      major: "Politics and Econ",
      school: "PSE",
      year: "3rd year",
    },
    {
      title: "Leeroy",
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
      <h1 className="members-title">Meet Our Team</h1>
      <div className="team-cards-container">
        {teamCards.map((teamCard, index) => (
          <TeamCard key={index} props={teamCard} />
        ))}
      </div>
    </div>
  );
};

export default BackendTeam;
