import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";

export const OperationsTeam: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Project Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Operations Team - Hosu Choi ",
    content:
      "Hi! I’m Hollie (Hosu), a M1 student majoring in Applied Physics at Waseda University. I’m the Operations Team Lead this year. Operations is a new team created as an attempt to integrate and recruit more Japanese students from Waseda into GDSC. Can’t wait to work with you all 😁",
    image: "operations_lead.jpg",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    // {
    //   title: "Lahiru",
    //   image: "operations_lead.jpg",
    //   major: "Computer Science",
    //   school: "FSE",
    //   year: "4th year",
    // },
    // {
    //   title: "Haruki",
    //   image: "operations_lead.jpg",
    //   major: "Physics",
    //   school: "ASE",
    //   year: "2nd year",
    // },
    // {
    //   title: "Taku",
    //   image: "operations_lead.jpg",
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
        <HeaderCard props={card} />
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
