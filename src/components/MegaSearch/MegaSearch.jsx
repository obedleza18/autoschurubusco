import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { getImageDataFromSrc } from '../../utils'
import wagon from '../../images/body-types/wagon.png'
import minivan from '../../images/body-types/minivan.png'
import coupe from '../../images/body-types/coupe.png'
import convertible from '../../images/body-types/convertible.png'
import crossover from '../../images/body-types/crossover.png'
import suv from '../../images/body-types/suv.png'

const title = 'Inventario'
const link = '/Inventario'
const links = [
  { link: '/results-list', text: 'Brand new cars' },
  { link: '/results-list', text: 'Used cars' },
  { link: '/results-list', text: 'Latest reviews' },
  { link: '/blog', text: 'Auto news' },
  { link: '/about', text: 'Car insurance' }
]
const bodyTypes = [
  { image: getImageDataFromSrc(wagon, 55, 40), link: '/wagon', text: 'Vagoneta' },
  { image: getImageDataFromSrc(minivan, 55, 40), link: '/minivan', text: 'Minivan' },
  { image: getImageDataFromSrc(coupe, 55, 40), link: '/coupe', text: 'Coupe' },
  { image: getImageDataFromSrc(convertible, 55, 40), link: '/convertible', text: 'Deportivo' },
  { image: getImageDataFromSrc(crossover, 55, 40), link: '/crossover', text: 'Sedán' },
  { image: getImageDataFromSrc(suv, 55, 40), link: '/suv', text: 'SUV' }
]
const bodyTypeText = 'Buscar por tipo'
const makes = [
  { image: getImageDataFromSrc(wagon, 60, 60), link: '/make' },
  { image: getImageDataFromSrc(wagon, 60, 60), link: '/make' },
  { image: getImageDataFromSrc(wagon, 60, 60), link: '/make' },
  { image: getImageDataFromSrc(wagon, 60, 60), link: '/make' },
  { image: getImageDataFromSrc(wagon, 60, 60), link: '/make' },
  { image: getImageDataFromSrc(wagon, 60, 60), link: '/make' },
  { image: getImageDataFromSrc(wagon, 60, 60), link: '/make' },
  { image: getImageDataFromSrc(wagon, 60, 60), link: '/make' }
]
const makeText = 'Buscar por marca'
const seeAllLink = '/todos'
const seeAllText = 'ver todos'

const MegaSearch = () => {
  return (
    <li className="megamenu">
      <Link to={link}>{title} <i className="fas fa-angle-down"></i></Link>
      <ul className="dropdown">
        <li>
          <div className="megamenu-container container">
            <div className="row">
              {links &&
                <div className="mm-col col-md-2">
                  <ul className="sub-menu">
                    {links.map(({ link, text }, index) =>
                      <li key={index}><Link to={link}>{text}</Link></li>
                    )}
                  </ul>
                </div>
              }
              {bodyTypes &&
                <div className="mm-col col-md-5">
                  <span className="megamenu-sub-title">{bodyTypeText}</span>
                  <ul className="body-type-widget">
                    {bodyTypes.map(({ image, link, text }, index) =>
                      <li key={index}>
                        <Link to={link}>
                          <GatsbyImage image={getImage(image)} alt="" />
                          <span>{text}</span>
                        </Link>
                      </li>
                    )}
                  </ul>
                  <Link to={seeAllLink} className="basic-link">
                    {seeAllText}
                  </Link>
                </div>
              }
              {makes &&
                <div className="mm-col col-md-5">
                  <span className="megamenu-sub-title">{makeText}</span>
                  <ul className="make-widget">
                    {makes.map(({ image, link }, index) =>
                      <li keey={index} className="item">
                        <Link to={link}>
                          <GatsbyImage image={getImage(image)} alt="" />
                        </Link>
                      </li>
                    )}
                  </ul>
                  <Link href={seeAllLink} className="basic-link">
                    {seeAllText}
                  </Link>
                </div>
              }
            </div>
          </div>
        </li>
      </ul>
    </li>
  )
}

export default MegaSearch