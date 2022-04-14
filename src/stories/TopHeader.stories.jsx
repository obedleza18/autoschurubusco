import React from "react";
import TopHeader from "../components/TopHeader";
import { getImage } from "gatsby-plugin-image";
import { getImageDataFromSrc } from "./utils";
import logo from '../images/logo.png'

export default {
  title: "General/TopHeader",
  component: TopHeader,
};

const Template = (args) => <TopHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  tagline: "Buying or Selling,<br />just got easier!",
  links: [
    { link: "/", text: "Buy" },
    { link: "/", text: "Sell" },
    { link: "/", text: "Join" },
  ],
  logo: getImage(getImageDataFromSrc(logo, 235, 102))
};
