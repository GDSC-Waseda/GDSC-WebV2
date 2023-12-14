import type { NextPage } from "next";
import CommonMeta from "components/CommonMeta";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <CommonMeta pageTitle="Home" />
      <div className="home-page">
        <div className="home-page__top">
          <div className="home-page__top__container">
            <div className="content-with-image">
              <div className="text-section">
                <div className="home-page__top__title">
                  Innovate<br></br>Empower <br></br>for the future
                </div>
              </div>
              <div className="image-section">
                <img src="gdsc-top.jpg" alt="GDSC Top" />
              </div>
            </div>
          </div>
          <p className="trusted-message">
            Trusted by the World's Best Companies
          </p>
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
