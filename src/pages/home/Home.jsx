import "./home.scss";

import { fetchMovies, fetchSeries } from "api/Api";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [results, setResults] = useState([]);
  const [type, setType] = useState("series");

  useEffect(() => {
    const params = { query: "loki" };
    type === "movie" ? searchMovies(params) : searchSeries(params);
    setType("series");
  }, [type]);

  const searchMovies = async (params) => {
    const data = await fetchMovies(params);
    setResults(data);
  };

  const searchSeries = async (params) => {
    const data = await fetchSeries(params);
    setResults(data);
  };

  const faqs = [
    { question: "question one", answer: "answer one" },
    { question: "question two", answer: "answer two" },
    { question: "question three", answer: "answer three" },
    { question: "question four", answer: "answer four" },
    { question: "question five", answer: "answer five" },
  ];
  return (
    <div className="home">
      <div className="front">
        <nav>
          <div className="left">
            <div className="logo">NETFLIX</div>
          </div>
          <div className="right">
            <div className="lang">English</div>
            <button>Sign In</button>
          </div>
        </nav>
        <div className="signup">
          <h2>Unlimited movies, TV shows and more</h2>
          <span>Watch anywhere. Cancel anytime.</span>
          <span>
            Ready to watch? Enter your email to create or restart your
            membership.
          </span>
          <div className="subscribe">
            <input type="text" placeholder="Email address" />
            <button>{`Get Started >`}</button>
          </div>
        </div>
      </div>
      <div className="service">
        <div className="left">
          <h2>Enjoy on your TV</h2>
          <span className="content">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </span>
        </div>
        <div className="right">
          <img
            src={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png`}
            alt=""
          />
        </div>
      </div>
      <div className="online">
        <div className="left">
          <h2>Download your shows to watch offline</h2>
          <span className="content">
            Save your favourites easily and always have something to watch.
          </span>
        </div>
        <div className="right">
          <img
            src={`https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg`}
            alt=""
          />
        </div>
      </div>
      <div className="kids">
        <div className="left">
          <h2>Create profiles for kids</h2>
          <span className="content">
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </span>
        </div>
        <div className="right">
          <img
            src={`https://occ-0-3646-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d`}
            alt=""
          />
        </div>
      </div>
      <div className="faqs">
        <h2>Frequently Asked Questions</h2>
        <div className="faqs">
          {faqs?.map((faq, index) => (
            <div className="faq">
              <div className="question">{faq?.question}</div>
              <div className="answer">{faq?.answer}</div>
            </div>
          ))}
        </div>
        <span>
          Ready to watch? Enter your email to create or restart your membership.
        </span>
        <div className="subscribe">
          <input type="text" placeholder="Email address" />
          <button>{`Get Started >`}</button>
        </div>
      </div>
    </div>
  );
}
