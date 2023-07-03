import React from "react";
import Image from "next/image";
import moneyImg from "../images/image-currency.jpg";
import restaurtantImg from "../images/image-restaurant.jpg";
import planImg from "../images/image-plane.jpg";
import confettiImg from "../images/image-confetti.jpg";
import "../styles/Articles.css";
const Articles = () => {
  return (
    <div className="articles-section">
      <h2 className="title">Last Articles</h2>
      <div className="articles-store">
        <div className="article-box">
          <Image alt="money image" src={moneyImg} />
          <div className="text">
            <p className="auther">By Claire Robinson</p>
            <h3 className="title">
              Receive money in any currency with on fees
            </h3>
            <p className="articles-description">
              The world is getting smaller and we are becoming more mobile. So
              why should you be forced to only receuve money in a single....{" "}
            </p>
          </div>
        </div>
        <div className="article-box">
          <Image alt="restaurtant image" src={restaurtantImg} />
          <div className="text">
            <p className="auther">By Wilson Hutton</p>
            <h3 className="title">
              Treat yourself without worrying about money
            </h3>
            <p>
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you ....
            </p>
          </div>
        </div>
        <div className="article-box">
          <Image alt="plane image " src={planImg} />
          <div className="text">
            <p className="auther">By Wilson Hutton</p>
            <h3 className="title">Take your Easybank card wherever you go </h3>
            <p>
              We want you to enjoy your travels.This is why we do not charge any
              fees on purchases while you are abroad . We will even show you
              ....
            </p>
          </div>
        </div>
        <div className="article-box">
          <Image alt="" src={confettiImg} />
          <div className="text">
            <p className="auther"> By Claire Robinson</p>
            <h3 className="title">
              Our inivite-only Beta accounts are now live!
            </h3>
            <p>
              After a lot of hard work by the whole team , we are excited to
              launch our closed beta . it is easy to request an invite through
              the site ....
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Articles;
