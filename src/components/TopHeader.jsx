import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const TopHeader = ({ tagline, links, logo }) => {
  return (
    <header className="site-header">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-in">
              <div className="site-logo">
                <h1><Link to="/"><GatsbyImage image={logo} alt="Logo" /></Link></h1>
                <span className="site-tagline" dangerouslySetInnerHTML={{__html: tagline}}></span>
              </div>
              <div className="header-right">
                <div className="user-login-panel">
                  <a href="#" className="user-login-btn" data-bs-toggle="modal" data-bs-target="#loginModal"><i className="icon-profile"></i></a>
                </div>
                <div className="topnav dd-menu">
                  <ul className="top-navigation sf-menu">
                    {links.map(({ link, text }) => <li><Link to={link}>{text}</Link></li>)}
                    {/*links.map(({ link, text }) => 
                      <li>
                        <ul>
                          {linksSec.map(({ link, text }) => <li></li>)}
                        </ul>
                      </li>)
                    */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    /*const linksSec = [
      { link: 'results-list.html', text: 'Buy' },
      { link: 'add-listing-pricing.html', text: 'Sell' },
      { link: 'joinus.html', text: 'Join' }
    ]

    const megaMenu = [
      { 
        link: 'something', 
        text: 'something', 
        subLinks: [
          { link: text }
        ] 
      }
    ]*/
  )
}

export default TopHeader