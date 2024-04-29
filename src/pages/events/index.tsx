import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  GetStaticPropsContext,
} from "next";
import Link from "next/link";
import { useState } from "react";
import { useTranslation } from "next-i18next";

import { HeaderCard, MediaCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, MediaCardProps } from "~/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

const EventsPage: NextPage = () => {
  const { t } = useTranslation();
  const card: HeaderCardProps = {
    headTitle: "",
    title: t("events:event_title"),
    content: t("events:event_message"),
  };

  const eventsCard_UpComing: MediaCardProps[] = [];

  const eventsCard_Past: MediaCardProps[] = [
    {
      size: "m",
      title: "Mini Solution Challenge",
      image:
        "https://res.cloudinary.com/df3ab0lxf/image/upload/v1705215902/thumbnail_event_solutionchallenge_3770ac70da.png",
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
      image:
        "https://res.cloudinary.com/df3ab0lxf/image/upload/v1705215934/thumbnail_event_bridgehack_065e585923.jpg",
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
      image:
        "https://res.cloudinary.com/df3ab0lxf/image/upload/v1705215902/thumbnail_event_mini_solution_challenge_2022_3302800ad3.png",
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
    const pastEvents = eventsCard_Past;

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
            <span>{t("events:event_upcoming")}</span>
          </div>
          {eventsCard_UpComing.length === 0 ? (
            <div className="no-events">
              <p>{t("events:upcoming_message")}</p>
            </div>
          ) : (
            <div className="events__body__container">
              {eventsCard_UpComing.map((eventCard, index) => (
                <Link
                  href={eventCard.link}
                  key={`upcoming-${index}`}
                  className="a"
                >
                  <a>
                    <MediaCard props={eventCard} />
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="events__body__past">
          <div className="events__body__header">
            <span>{t("events:event_past")}</span>
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
          ) : searchInput === "" ? (
            <>
              {/* Combine dynamicArticles with eventsCard_Past */}
              {/* {[...eventsCard_Past, ...dynamicArticles].map(
                (eventCard, index) => (
                  <Link href={eventCard.link} key={`combined-${index}`}>
                    <a>
                      <MediaCard props={eventCard} />
                    </a>
                  </Link>
                )
              )} */}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
