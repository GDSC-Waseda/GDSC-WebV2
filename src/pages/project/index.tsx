import type { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { Button } from "react-bootstrap";

import { HeaderCard, MediaCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, MediaCardProps } from "~/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["events", "common"])),
    },
  };
};

const ProjectPage: NextPage = () => {
  const { t } = useTranslation();
  const card: HeaderCardProps = {
    headTitle: "",
    title: t("project:project_title"),
    content: t("project:project_message"),
  };

  const eventsCard_UpComing: MediaCardProps[] = [];

  const project_cards: MediaCardProps[] = [
    {
      size: "m",
      title: "Mini Solution Challenge",
      image: "",
      tags: ["Solution Challenge", "Demo Day"],
      date: "July 14, 2023 @Google Japan",
      description: "2023 Mini-Solution Challenge by GDSC Waseda",
      link: "/events/details/mini-solution-challenge-2023",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "The Bridge Hackathon 2023",
      image: "",
      tags: ["Hackathon", "International", "Demo Day"],
      date: "Feb 11th & 12th, 2023 @FinGATE KAYABA",
      description: "24-hour global hackathon across Japan and Korea",
      link: "/events/details/bridge-hackathon-2023",
      open: true,
      canOpen: false,
    },
    {
      size: "m",
      title: "Mini Solution Challenge",
      image: "",
      tags: ["Solution Challenge", "Demo Day"],
      date: "July 17, 2022 @Google Japan",
      description: "2022 Mini-Solution Challenge by GDSC Waseda",
      link: "/events/details/mini-solution-challenge-2022",
      open: true,
      canOpen: false,
    },
  ];

  const [showCard, setShowCard] = useState(3);

  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState<MediaCardProps[]>([]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setSearchInput(input);
    setSearchResults(filterPastEvents(input));
  };

  const filterPastEvents = (input: string) => {
    const pastEvents = project_cards;

    return pastEvents.filter(
      (event) =>
        event.title.toLowerCase().includes(input.toLowerCase()) ||
        event.description.toLowerCase().includes(input.toLowerCase())
    );
  };

  return (
    <>
      <CommonMeta
        pageTitle={card.title}
        pageDescription={card.content}
        pagePath="events"
        pageImgWidth={1280}
        pageImgHeight={630}
      />
      <HeaderCard props={card} />
      <div className="events__body">
        <div className="events__body__upcoming">
          <div className="events__body__header">
            <span>Upcoming</span>
          </div>
          {eventsCard_UpComing.length === 0 ? (
            <div className="no-events">
              <p>Stay tuned for more exciting events!</p>
            </div>
          ) : (
            <div className="events__body__container">
              {eventsCard_UpComing.map((eventCard, index) => {
                return (
                  <Link href={eventCard.link} key={index} className="a">
                    <a>
                      <MediaCard props={eventCard} />
                    </a>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
        <div className="events__body__past">
          <div className="events__body__header">
            <span>Past</span>
            <div className="events__search-bar">
              <img
                src="/tempImg/events/magnefying-glass.png"
                alt=""
                className="events__search-icon"
                width={20}
                height={22}
              />
              <input
                className="events__search"
                type="text"
                placeholder="search event"
                value={searchInput}
                onChange={handleSearchInputChange}
              />
            </div>
          </div>
          {searchResults.length === 0 && searchInput !== "" && (
            <p>No results found.</p>
          )}
          {searchResults.length > 0 ? (
            <>
              {searchResults.map((eventCard, index) => (
                <Link href={eventCard.link} key={index}>
                  <a>
                    <MediaCard props={eventCard} />
                  </a>
                </Link>
              ))}
            </>
          ) : searchInput == "" ? (
            project_cards.map((eventCard, index) => (
              <Link href={eventCard.link} key={index}>
                <a>
                  <MediaCard props={eventCard} />
                </a>
              </Link>
            ))
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ProjectPage;