import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps, TeamHeaderCardProps } from "~/types";
import TeamHeaderCard from "~/components/Cards/TeamHeaderCard";

export const OperationsTeam: NextPage = () => {
  const card:TeamHeaderCardProps = {
    headTitle: "",
    title: "Outreach Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Outreach Team - Harshita Chivukula",
    content:
      "Hello! I’m Harshita (Harshi), a senior at Waseda University’s School of Fundamental Science and Engineering. The outreach team is excited for another year or events where we can bridge the gap between students and working professionals in various technical fields.",
    image: "outreach_lead.jpg",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    // {
    //   title: "Lahiru",
    //   image: "lead.jpg",
    //   major: "Computer Science",
    //   school: "FSE",
    //   year: "4th year",
    // },
    // {
    //   title: "Tazkya",
    //   image: "backend_lead.jpg",
    //   major: "Physics",
    //   school: "ASE",
    //   year: "2nd year",
    // },
    // {
    //   title: "Haru",
    //   image: "lead.jpg",
    //   major: "Politics and Econ",
    //   school: "PSE",
    //   year: "3rd year",
    // },
    // {
    //   title: "Gun",
    //   image: "project_lead.jpg",
    //   major: "Civil Eng",
    //   school: "CSE",
    //   year: "2nd year",
    // },
    // {
    //   title: "Bea",
    //   image: "project_lead.jpg",
    //   major: "Politics and Econ",
    //   school: "PSE",
    //   year: "3rd year",
    // },
    // {
    //   title: "Leeroy",
    //   image: "project_lead.jpg",
    //   major: "Politics and Econ",
    //   school: "PSE",
    //   year: "3rd year",
    // },
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
        <TeamHeaderCard props={card} />
      </div>
      <ImageCard props={imageCardProps} />
      {/* <h1 className="members-title">Meet Our Team</h1> */}
      <div className="team-cards-container">
        {teamCards.map((teamCard, index) => (
          <TeamCard key={index} props={teamCard} />
        ))}
      </div>
    </div>
  );
};

export default OperationsTeam;
