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
    title: "Backend Team - Gunjan Srivastava",
    content:
      "Hello everyone! I’m Gunjan, a third year student at Waseda University studying Computer Science and Communications Engineering. In my team, I hope to drive development through implementation of creative solutions (and a little bit of ChatGPT). Together, let's push boundaries and unlock new possibilities, one step at a time!",
    image: "backend_lead.png",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    {
      title: "Lahiru",
      image: "lead.png",
      major: "Computer Science",
      school: "FSE",
      year: "4th year",
    },
    {
      title: "Tazkya",
      image: "lead.png",
      major: "Physics",
      school: "ASE",
      year: "2nd year",
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
