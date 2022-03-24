import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const Image = ({ image }) => {
  return <GatsbyImage image={getImage(image)} alt="" />
  //return img ? img : gatsbyImage
}

export default Image