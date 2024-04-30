import {
  GetStaticPaths,
  GetStaticProps,
  NextPage,
  GetStaticPropsContext,
} from "next";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { client } from "../../sanity";
import { HeaderCard, MediaCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, MediaCardProps } from "~/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { locale } = context;
  const query = `*[_type == "blogPost"]{
    title,
    mainImage,
    tags,
    publishedAt,
    body,
    slug
  }`;
  const blogPostsResponse = await client.fetch(query);
  const blogPosts = blogPostsResponse.map(
    (post: {
      title: any;
      mainImage: any;
      tags: any;
      publishedAt: string | number | Date;
      body?: { children: { text: any }[] }[];
      slug: any;
    }) => ({
      size: "m",
      title: post.title,
      image: post.mainImage || "/gdsc-top.jpg",
      tags: post.tags,
      date: new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      description:
        post.body && post.body[0] ? post.body[0].children[0].text : undefined,
      link: `/blog/${post.slug}`,
      open: false,
      canOpen: false,
    })
  );

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["events", "common"])),
      blogPosts,
    },
  };
};

const EventsPage: NextPage<{ blogPosts: MediaCardProps[] }> = ({
  blogPosts,
}) => {
  const { t } = useTranslation();
  const [blogPost, setBlogPosts] = useState<MediaCardProps[]>(blogPosts);

  const card: HeaderCardProps = {
    headTitle: "",
    title: t("events:event_title"),
    content: t("events:event_message"),
  };

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
  ];

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
          {blogPost.map((post, index) => (
            <Link href={post.link} key={index}>
              <MediaCard props={post} />
            </Link>
          ))}

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
