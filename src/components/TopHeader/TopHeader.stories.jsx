import React from "react";
import TopHeader from ".";
import { getImage } from "gatsby-plugin-image";
import { getImageDataFromSrc } from "../../utils";
import logo from '../../images/logo.png'

export default {
  title: "General/TopHeader",
  component: TopHeader,
};

const Template = (args) => <TopHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
  tagline: "Compro su auto,<br />o se lo cambio",
  links: [
    { link: "/", text: "Buy" },
    { link: "/", text: "Sell" }
  ],
  logo: getImage(getImageDataFromSrc(logo, 235, 102))
};
