import React from "react";
import "./brand.css";
import { google, atlassian, shopify, slack, dropbox } from "./import";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="Company Image" />
      </div>
      <div>
        <img src={slack} alt="Company Image" />
      </div>
      <div>
        <img src={atlassian} alt="Company Image" />
      </div>
      <div>
        <img src={dropbox} alt="Company Image" />
      </div>
      <div>
        <img src={shopify} alt="Company Image" />
      </div>
    </div>
  );
};

export default Brand;
