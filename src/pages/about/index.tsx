import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import TagManager from "react-gtm-module";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Stack from "@mui/material/Stack";
import Button from "react-bootstrap/Button";

import { ImageCard, HeaderCard, TextCard } from "components/Cards/index";
import Carousel from "components/Carousel";
import CommonMeta from "components/CommonMeta";
import {
  HeaderCardProps,
  CarouselCardProps,
  TextCardProps,
  ImageCardProps,
} from "~/types";

export const AboutPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "ABOUT US",
    content: "",
    button: true,
  };

  const whatWeDo: TextCardProps = {
    title: "What do we do?",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
    culpa qui officia deserunt mollit anim id est laborum.`,
  };

  const leadsThoughts: TextCardProps = {
    title: "Our Lead’s Thoughts",
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
    nisi ut aliquip ex ea commodo consequat.`,
  };

  const carouselCards: Array<CarouselCardProps> = [
    {
      image: "minisch2023.png",
      subtitle: "Mini Solution Challenge 23",
      title: "JUL 17, 2022",
      old: false,
      link: "events/details/mini-solution-challenge-2023",
    },
    {
      image: "hackath.png",
      subtitle: "Bridge Hackathon 2023",
      title: "FEB 11, 2023",
      old: false,
      link: "events/details/bridge-hackathon-2023",
    },
    {
      image: "demoday.png",
      subtitle: "Mini Solution Challenge 22",
      title: "JUL 17, 2022",
      old: false,
      link: "events/details/mini-solution-challenge-2022",
    },
    {
      image: "web3sesh.png",
      subtitle: "Web3 Speaker Session",
      title: "JUN 14, 2023",
      old: false,
      link: "/404",
    },
  ];
  /*
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-AboutPage' })
  }, []) */

  return (
    <div className="about-page">
      <CommonMeta
        pageTitle={card.title}
        pageDescription={card.content}
        pagePath="about"
        pageImgWidth={1280}
        pageImgHeight={630}
      />
      <HeaderCard props={card} />

      <TextCard props={whatWeDo} />
      <TextCard props={leadsThoughts} />

      <div className="about-page__events">
        <div className="about-page__events__container">
          <div className="about-page__events__title">
            Build Good Things, Together
          </div>
          <div className="about-page__events__description">
            Innovation never ends. Join us as we explore topics from all fields.
          </div>
        </div>

        <div className="about-page__events__carousel">
          <Carousel props={carouselCards} />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
