import React from "react";
import Image from "next/image";
import phonePhoto from "../images/image-mockups.png";
import "../styles/Landing.css";
export const landing = () => {
  return (
    <div className="landing" id="home">
      <div className="text">
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online .Your Easybank account will be a
          one-stop-shopfor spending . sabing budgeting,investing and much more.{" "}
        </p>
        <button className="button">Request invite</button>
      </div>
      <div className="image">
        <Image src={phonePhoto} alt="phone photo"></Image>
      </div>
    </div>
  );
};
export default landing;
