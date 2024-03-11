import type { NextPage } from "next";
import Image from "next/image";
import { HeaderCard } from "components/Cards/index";
import CommonMeta from "components/CommonMeta";
import { HeaderCardProps, TextCardProps } from "~/types";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, GetStaticPropsContext } from "next";

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["about", "common"])),
    },
  };
};

export const AboutPage: NextPage = () => {
  const { t } = useTranslation();

  const card: HeaderCardProps = {
    headTitle: "",
    title: t("about:header"),
    content: "",
    button: true,
    buttonText: t("about:discButt"),
  };

  const whatWeDo: TextCardProps = {
    title: t("about:what"),
    content: t("about:motomesg"),
  };

  const leadsThoughtsContent = t("about:leadmesg");
  console.log(t("about:head"));
  console.log(t("about:discButt"));

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
          <h2 className="textCard__section__title">{t("about:leadthought")}</h2>
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
