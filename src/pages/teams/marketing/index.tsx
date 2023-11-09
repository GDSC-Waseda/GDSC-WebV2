import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";

export const OperationsTeam: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Marketing Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Marketing Team - Seongjoon Park ",
    content:
      "Hi everyone! 😊 I’m Seongjoon, a junior year student at Waseda University's School of International Liberal Studies (SILS). Our Marketing Team at GDSC Waseda is all about promoting and spreading the word about the exciting tech events, workshops, and opportunities we have in store. From creating engaging content to utilizing social media and other marketing channels, we're dedicated to enhancing the GDSC Waseda brand and ensuring that students don't miss out on all the innovation and learning opportunities we offer.",
    image: "marketing_lead.jpg",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    // {
    //   title: "Lahiru",
    //   image: "marketing_lead.jpg",
    //   major: "Computer Science",
    //   school: "FSE",
    //   year: "4th year",
    // },
    // {
    //   title: "Tazkya",
    //   image: "marketing_lead.jpg",
    //   major: "Physics",
    //   school: "ASE",
    //   year: "2nd year",
    // },
    // {
    //   title: "Haru",
    //   image: "marketing_lead.jpg",
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
