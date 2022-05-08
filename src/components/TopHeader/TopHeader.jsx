import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import styles from './TopHeader.module.css'

const { topNavigation } = styles

const TopHeader = ({ tagline, links, logo, loginLink }) => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-in">
              <div className="site-logo">
                <h1>
                  <Link to="/">
                    <GatsbyImage image={logo} alt="Logo" />
                  </Link>
                </h1>
                <span
                  className="site-tagline"
                  dangerouslySetInnerHTML={{ __html: tagline }}
                ></span>
              </div>
              <div className="header-right">
                {loginLink &&
                  <div className="user-login-panel">
                    <Link
                      href={loginLink}
                      className="user-login-btn"
                      data-bs-toggle="modal"
                      data-bs-target="#loginModal"
                    ><i className="icon-profile"></i></Link>
                  </div>
                }
                <div className="topnav dd-menu">
                  <ul className={`${topNavigation} top-navigation sf-menu`}>
                    {links.map(({ link, text }, index) =>
                      <li key={index}><Link to={link}>{text}</Link></li>)
                    }
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default TopHeader