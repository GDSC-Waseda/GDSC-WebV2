import type { NextPage } from "next";
import { HeaderCard, TeamCard, ImageCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, ImageCardProps, TeamCardProps } from "~/types";

export const TeamsPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "Our Teams",
    content: "Waseda University's chapter of the Google Developer Student Club",
  };
  const teamLeaders: Array<{ name: string; image: string; link: string }> = [
    {
      name: "Project",
      image: "project_lead.jpg",
      link: "test1",
    },
    {
      name: "Finance",
      image: "finance_lead.jpg",
      link: "test1",
    },
    {
      name: "Backend",
      image: "finance_lead.jpg",
      link: "test1",
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
      <HeaderCard props={card} />

      <div className="bold-text">
        <a>
          Teams are the foundation to any organization.
          <br></br>
          Explore the different. Teams that work together to make GDSC Waseda
          truly special.
        </a>
      </div>

      <div className="team-leaders-container">
        {teamLeaders.map((teamCard, index) => (
          <div key={index} className="team-leader">
            <img
              className="team-leader-image"
              src={`assets/img/${teamCard.image}`}
              alt="team leader"
            />
            <div className="team-leader-name">{teamCard.name}</div>
            <a className="team-leader-link" href={`/teams/${teamCard.link}`}>
              Learn more?
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamsPage;
