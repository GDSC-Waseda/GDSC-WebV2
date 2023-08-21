import type { NextPage } from "next";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

const ArticlePage: NextPage = () => {
  const article = {
    title: "Mini Solution Challenge 2022",
    author: "Gunjan Srivastava & Pryia Mukkundi",
    //date: "July 10, 2023",
    //content: {},
    image: "event-mini-solution-challenge-2022.png",
    tags: ["Solution Challenge", "Demo Day"],
    length: "2"
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <div className="article">
      <h1 className="article__title">{article.title}</h1>
      <div className="article__author">
        <div>
          [Author Image]
        </div>
        <div className = "article__author-text">
          <p className ="article__author-names">{article.author}・<a className="article__author-info" href="/404">View</a></p>
          <p className = "article__length">{article.length} min read</p>
        </div>
      </div>

      <hr />

      <div>
        <img className = "article__image" src={`assets/img/events/${article.image}`}/>
        I can't get an image to render here (help) ;-;
      </div>
      

      <div>
        <p>
          Google Developers Student Club (GDSC) Waseda held its first in-person event, the “Mini Solution Challenge 2022” on 17th July 2022, to showcase the fantastic projects submitted by our members for the Google Solution Challenge 2022.
        </p>
        <p>
          The GDSC Solution Challenge is a competition held annually by Google, where students from GDSC Chapters all over the world form teams of 2-4 developers to create a solution that solves or addresses at least one of the seventeen <a className="article__link" href="https://sdgs.un.org/goals"> United Nations Sustainable Development Goals</a>.
        </p>
        <p>
          Last year, GDSC Waseda held a mini-version of the Solution Challenge, where four teams that had participated in the 2022 Solution Challenge had the opportunity to present and discuss their submitted solutions.
        </p>
        <br/>

        {/* Team Mimi 4 Me */}
        <h2>Team Mimi 4 Me</h2>
        <p>
          Team Mimi 4 Me (耳 for Me by Sien Peralta, Hosu “Hollie” Choi,  Minkyoung Choi, Khaled Muhammed) created an application that tells the user of possible surrounding sounds and notifies the user when the sound reaches a certain decibel.
        </p>
        {/* Team Carbon Calculator App */}
        <h2>Team Carbon Calculator App</h2>
        <p>
          Team Carbon Calculator App (by Jake Underland, Kyung Min Park, Jaewoong Jeong, Andre) created an app that utilizes image recognition technology to calculate the carbon footprint of a meal, enabling us to visualize how much damage we do to the environment and become more mindful of our carbon footprint.
        </p>
        {/* Food Waste Fighter */}
        <h2>Food Waste Fighter</h2>
        <p>
          Food Waste Fighter (by Kaede Iijima, Navya Ann Eldho, Haru Okuda, Takumi Otsuka) created an application where organizations can notify the users about donations or discounted food items to reduce food wastage and encourage users to help the businesses in any way possible.
        </p>
        {/* SPOGAPP */}
        <h2>SPOGAPP</h2>
        <p>
          SPOGAPP (by Jion Tominaga, Hiroto Fukuoka, Ryo Togashi) created an application encouraging people to lead a healthier lifestyle through sports. Users of the application can join or create groups that interest them. With a few steps, users can play their desired sport as the application helps filter and sort the relevant recruitment posts.
        </p>
        <br/>

        <p>
          With almost 40 people in attendance, the event was a huge success. The event continued with Q&A sessions as well as a voting session where the audience voted for their favorite team. This was followed by lunch and an engaging networking session with fun games like pictionary and table tennis.
        </p>
        <p>
          The Mini Solution Challenge 2022 was concluded by awarding the winner, Team Carbon Calculator App.
        </p>
        <p>
          We look forward to holding this event annually and help in creating a community of students with similar interests!! 😀
        </p>
      </div>
      
      <div className="article__footer">
        <div className="article__tags">
          {article.tags.map((tag, index) => (
            <div className="article__tag" key={index}>
              {tag}
            </div>
          ))}
        </div>
        <div>
          <Button
            variant="outline-dark"
            onClick={handleClick}
            className="article__return-button"
          >
            <i className="fas fa-arrow-up"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
