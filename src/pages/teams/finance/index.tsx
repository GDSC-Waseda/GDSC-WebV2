import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { ImageCardProps, TeamCardProps, TeamHeaderCardProps } from "~/types";
import TeamHeaderCard from "~/components/Cards/TeamHeaderCard";

export const FinanceTeam: NextPage = () => {
  const card: TeamHeaderCardProps = {
    headTitle: "",
    title: "Finance Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Finance Team - Hyonjoon Park ",
    content:
      "Hey there! 😊 I'm Hyonjoon, a junior at Waseda University's School of International Liberal Studies (SILS). I'm thrilled to serve as the team lead for GDSC Waseda's Finance Team this year. Our team plays a vital role in managing and optimizing project finances, ensuring the success of our tech initiatives. I'm looking forward to a fantastic year ahead and can't wait to collaborate with you and our GDSC community to achieve great things together!",
    image: "finance_lead.jpg",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    // {
    //   title: "Lahiru",
    //   image: "frontend_lead.jpg",
    //   major: "Computer Science",
    //   school: "FSE",
    //   year: "4th year",
    // },
    // {
    //   title: "Tazkya",
    //   image: "frontend_lead.jpg",
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
    //   image: "frontend_lead.jpg",
    //   major: "Civil Eng",
    //   school: "CSE",
    //   year: "2nd year",
    // },
    // {
    //   title: "Bea",
    //   image: "finance_lead.jpg",
    //   major: "Politics and Econ",
    //   school: "PSE",
    //   year: "3rd year",
    // },
    // {
    //   title: "Leeroy",
    //   image: "finance_lead.jpg",
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

export default FinanceTeam;
