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
  const outlineColors = [
    "#e94336",
    "#4283f3",
    "#00a150",
    "#fabb08",
    "#e94336",
    "#4283f3",
    "#00a150",
    "#fabb08",
  ];
  const teamLeaders: Array<{ name: string; image: string; link: string }> = [
    {
      name: "Project",
      image: "project_lead.png",
      link: "project",
    },
    {
      name: "Finance",
      image: "finance_lead.png",
      link: "finance",
    },
    {
      name: "Outreach",
      image: "s_lead.png",
      link: "outreach",
    },
    {
      name: "Operations",
      image: "edu_lead.png",
      link: "test1",
    },
    {
      name: "Frontend",
      image: "backend_lead.png",
      link: "test1",
    },
    {
      name: "Backend",
      image: "lead.png",
      link: "test1",
    },
    {
      name: "Education",
      image: "edu_lead.png",
      link: "test1",
    },
    {
      name: "Marketing",
      image: "market_lead.png",
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
          Explore the different teams that work together to make GDSC Waseda
          truly special.
        </a>
      </div>

      <div className="team-leaders-container">
        {teamLeaders.map((teamCard, index) => (
          <div key={index} className="team-leader">
            <img
              className="team-leader-image"
              src={`/GDSC-web/tempImg/${teamCard.image}`}
              style={{
                border: `5px solid ${
                  outlineColors[index % outlineColors.length]
                }`,
              }}
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
