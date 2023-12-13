import type { GetServerSideProps, NextPage } from "next";

import CommonMeta from "components/CommonMeta";

import { listDriveFiles } from "../services/driveApi";

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const files = await listDriveFiles();
    return { props: { files } };
  } catch (error) {
    console.error("Error fetching files:", error);
    return { props: { files: [] } }; // Return an empty array in case of error
  }
};

interface HomeProps {
  files: Array<{ id: string; name: string }>; // Adjust this type based on the actual structure of your file data
}
const Home: NextPage<HomeProps> = ({ files }) => {
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
          <p>Trusted by the World's Best Companies</p>
        </div>

        {/* Displaying the files from Google Drive */}
        <div className="file-list">
          <h2>Files from Google Drive</h2>
          <ul>
            {files.map((file) => (
              <li key={file.id}>{file.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
