import React from "react";
import "../styles/Description.css";
import Image from "next/image";
import apiIcon from "../images/icon-api.svg";
import onboardIcon from "../images/icon-onboarding.svg";
import budgetingIcon from "../images/icon-budgeting.svg";
import onlineIcon from "../images/icon-online.svg";

const Description = () => {
  return (
    <div className="description">
      <div className="text">
        <h2 className="title">Why choose Easybank?</h2>
        <p>
          we leverage . Open Banking to turn bank account into your financial
          hub . Control your finances like never before.
        </p>
      </div>
      <div className="attributes">
        <div className="box">
          <Image src={onlineIcon} alt="online icon"></Image>
          <h3>Online Banking</h3>
          <p>
            Our modren web and mobile applicaitons allow you to keep track of
            your finances wherever you are in the world
          </p>
        </div>
        <div className="box">
          <Image src={budgetingIcon} alt="budgetion icon" />
          <h3>Simple Budgeting</h3>
          <p>
            See exactly where you money goes each month .Receive notifications
            when you are close to hitting your limits.
          </p>
        </div>
        <div className="box">
          <Image src={onboardIcon} alt="onboard icon" />
          <h3>Fast Onboarding</h3>
          <p>
            we do not do branches. Open your account in minutes online and start
            taking control of your finances right away
          </p>
        </div>
        <div className="box">
          <Image src={apiIcon} alt="api icon" />
          <h3>Open API</h3>
          <p>
            Manage your savings ,investments, pension, and much more from one
            account . Tracking your money has never been easier
          </p>
        </div>
      </div>
    </div>
  );
};
export default Description;
