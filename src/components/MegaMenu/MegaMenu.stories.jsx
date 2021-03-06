import React from "react";
import MegaMenu from ".";

export default {
  title: "General/MegaMenu",
  component: MegaMenu
};

const Template = (args) => <MegaMenu {...args} />

export const Default = Template.bind({});
Default.args = {};
