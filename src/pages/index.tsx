import type { NextPage } from "next";
import CommonMeta from "components/CommonMeta";
import Loading from "components/Loading"; // Make sure to import your Loading component
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import type { GetStaticProps, GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useEffect, useState } from "react"; // Import useState and useEffect

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext,
) => {
  const { locale } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale as string, ["home", "common"])),
    },
  };
};

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true); // Initialize loading state to true

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay
    }, 1200); // Delay in milliseconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  if (loading) {
    return <Loading />;
  }

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
                <img src="/gdsc-top.jpg" alt="GDSC TOP" />
              </div>
            </div>
          </div>
          <p>{t("home:trusted_by")}</p>
          <div className="trusted-companies">
            <Image
              src="/women_tech.jpg"
              alt="women-tech"
              width={100}
              height={100}
            />
            <Image src="/google.jpg" alt="google" width={100} height={100} />
            <Image src="/fingate.jpg" alt="fingate" width={100} height={100} />
            <Image
              src="/fincatch.jpg"
              alt="fincatch"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
