import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";

export const EducationTeam: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Education Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Education Team - Beatrix Sylvani ",
    content:
      "Hi! My name is Beatrix, but you can call me Bea(🐝)! I am one of the co-leaders for the Education team for GDSC Waseda. Our team is focused on hosting coding classes with the public and building a wide range of connections. For this semester, we are planning to host Figma and Powerpoint 101 classes. Our team is welcoming for anyone who wants to learn and test the waters for different kind of programming classes :>",
    image: "education_lead.png",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    {
      title: "Lahiru",
      image: "education_lead1.png",
      major: "Computer Science",
      school: "FSE",
      year: "4th year",
    },
    {
      title: "Tazkya",
      image: "education_lead1.png",
      major: "Physics",
      school: "ASE",
      year: "2nd year",
    },
    {
      title: "Haru",
      image: "education_lead.png",
      major: "Politics and Econ",
      school: "PSE",
      year: "3rd year",
    },
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
      <h1 className="members-title">Meet Our Team</h1>
      <div className="team-cards-container">
        {teamCards.map((teamCard, index) => (
          <TeamCard key={index} props={teamCard} />
        ))}
      </div>
    </div>
  );
};

export default EducationTeam;
