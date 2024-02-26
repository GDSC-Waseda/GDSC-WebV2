import type { NextPage } from "next";
import Image from "next/image";
import { HeaderCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, TextCardProps } from "~/types";

export const AboutPage: NextPage = () => {
  const card: HeaderCardProps = {
    headTitle: "",
    title: "ABOUT US",
    content: "",
    button: true,
  };

  const whatWeDo: TextCardProps = {
    title: "What do we do?",
    content: `Welcome to GDSC Waseda, where coding meets fun! 🎉 We're all about creating with code, from hackathons that feel like festivals to workshops where you actually build cool stuff. Get inspired by tech wizards, dive into hands-on projects, and join study jams that feel more like hangouts. We're not just a club; we're a community of innovators and friends ready to make some magic. Ready to join the adventure? 🚀✨`,
  };

  const leadsThoughtsContent = `Hey everyone! As a 4th-year Mathematical Sciences major and leader of Japan's largest GDSC chapter, I'm all about blending codes, ideas, and coffee☕. Our 200+ member family thrives on creativity and innovation. Here, we're more than coders; we're a community forging lasting friendships and pushing the boundaries of tech. My goal? To inspire us to dream big and code boldly. Let's make this year legendary by creating, learning, and growing together. Here's to coding our way to change! ✨`;

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

      {/* What We Do Section */}
      <div className="textCard__section">
        <h2 className="textCard__section__title">{whatWeDo.title}</h2>
        <p className="textCard__section__content">{whatWeDo.content}</p>
      </div>

      {/* Our Lead's Thoughts Section Styled Similarly but Outside TextCard */}
      <div className="textCard__section leads-thoughts-custom">
        <div className="leads-thoughts-text">
          <h2 className="textCard__section__title">Our Lead's Thoughts</h2>
          <p className="textCard__section__content">{leadsThoughtsContent}</p>
        </div>
        <div className="leader-vision-image">
          <Image
            src="/tempImg/leads/lead.jpg"
            alt="Our Leader"
            width={250}
            height={250}
            layout="intrinsic"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
