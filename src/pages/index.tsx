import type { NextPage } from "next";
import Link from "next/link";
import { Button, Col, Container, Row } from "react-bootstrap";

import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import CommonMeta from "components/CommonMeta";
import { ImageIcon } from "components/ImageIcon";
import { imageIconData } from "constants/index";
import { ImageCardProps } from "~/types";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";

// Translation stuff
export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["home"])),
    },
  };
};

const Home: NextPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <CommonMeta pageTitle="Home" />
      <div className="home-page">
        <div className="home-page__top">
          <div className="home-page__top__container">
            <div className="content-with-image">
              <div className="text-section">
                <div className="home-page__top__title">
                  {t("home:welcome_mes")}
                </div>
              </div>
              <div className="image-section">
                <img src="gdsc-top.jpg" alt="GDSC Top" />
              </div>
            </div>
          </div>
          <p>{t("home:trusted_by_worlds_best")}</p>
        </div>
      </div>
    </>
  );
};

export default Home;
