import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";

export const AgileTeam: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Agile Team",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };

  const imageCardProps: ImageCardProps = {
    title: "Agile Team - Lahiru Udawatta",
    content:
      "Hoi everyone 🙌, my name's Lahiru, and I'm honored to be the lead of the Agile team for GDSC Waseda. Our dynamic team uses the Agile methodology, infusing industry-oriented practices into our web development projects. The sleek website you're currently browsing is brought to you by my team ;). Excited to see what we can build this year with all of you!",
    image: "agile_lead.jpg",
    imagePosition: "left",
  };

  const teamCards: Array<TeamCardProps> = [
    // {
    //   title: "Haruki",
    //   image: "project_lead.jpg",
    //   major: "Computer Science",
    //   school: "FSE",
    //   year: "2nd year",
    // },
    // {
    //   title: "Gunjan",
    //   image: "project_lead.jpg",
    //   major: "Physics",
    //   school: "ASE",
    //   year: "2nd year",
    // },
    // {
    //   title: "Haru",
    //   image: "project_lead.jpg",
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

export default AgileTeam;
