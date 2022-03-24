import React from 'react';
import { getImageDataFromSrc } from './utils';
import Image from '../components/Image'
import image from './assets/icon.png'

export default {
  title: 'Components/Image',
  component: Image
};

const Template = (args) => <Image image={getImageDataFromSrc(image, 200, 200)} />;

export const Default = Template.bind({});
