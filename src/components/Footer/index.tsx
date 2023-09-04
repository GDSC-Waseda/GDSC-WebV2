import Image from "next/image";
import Link from "next/link";

import Google from "/src/assets/svg/google.svg";
import Instagram from "/src/assets/svg/instagram.svg";
import LinkedIn from "/src/assets/svg/linked-in.svg";
import logo from "/src/assets/svg/logo.svg";

export const Footer = (): JSX.Element => {
  return (
    <footer className="footer">
      <div className="footer__logoContainer">
        <Image src={logo} height={60} width={60} alt="footer-logo" />
      </div>
      <div className="footer__pathContainer">
        <Link href="/about" className="footer__pathItem">
          About
        </Link>
        <Link href="/teams" className="footer__pathItem">
          Teams
        </Link>
        <Link href="/events" className="footer__pathItem">
          Events
        </Link>
      </div>
      <hr />
      <div className="footer__logoContainer">
        <a
          href="https://gdsc.community.dev/waseda-university/"
          target="_blank"
          className="footer__pathItem"
          rel="noreferrer"
        >
          <Image src={Google} height={40} width={40} alt="google" />
        </a>
        <a
          href="https://www.instagram.com/gdsc_waseda/"
          className="footer__pathItem"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={Instagram} height={40} width={40} alt="instagram" />
        </a>
        <a
          href="https://www.linkedin.com/company/google-dsc-waseda-university"
          className="footer__pathItem"
          target="_blank"
          rel="noreferrer"
        >
          <Image src={LinkedIn} height={40} width={40} alt="linkdin" />
        </a>
      </div>
      <div className="footer__reserved">All Rights Reserved by GDSC Waseda</div>
    </footer>
  );
};

export default Footer;
