import React from "react";
import { Link } from "gatsby"
import MegaSearch from "../MegaSearch";

const phone = '1800 011 2211'

const megaMenu = [
  {
    link: '/pages',
    text: 'Pages',
    links: [
      { link: '/about', text: 'About Us' },
      { link: '/contact', text: 'Contact Us' },
      { link: '/joinus', text: 'Signup' },
      { link: '/404', text: '404 Error Page' },
      { link: '/add-listing-pricing', text: 'Pricing' },
      { link: '/shortcodes', text: 'Shortcodes' },
      { link: '/typography', text: 'Typography' },
      { link: '/dealers-search', text: 'Dealer Search' },
      { link: '/dealers-search-results', text: 'Dealer Search Results' }
    ]
  },
  {
    link: '/listing',
    text: 'Listing',
    links: [
      { link: 'results-list', text: 'List View' },
      { link: 'results-grid', text: 'Grid View' },
      { link: 'vehicle-details', text: 'Vehicle Details' },
      { link: 'add-listing-form', text: 'Add new listing' },
      { link: 'vehicle-comparision', text: 'Vehicle Comparision' }
    ]
  }
]

const MegaMenu = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="col-12">
          <div className="display-flex nav-in">
            <div className="search-function">
              <a href="#" className="search-trigger">
                <i className="fas fa-search"></i>
              </a>
              <span>
                <i className="fas fa-phone"></i> Llámanos{" "}
                <strong>{phone}</strong> <em>o</em> busca
              </span>
            </div>
            <a href="#" className="visible-sm visible-xs" id="menu-toggle">
              <i className="fas fa-bars"></i>
            </a>
            <nav
              className="main-navigation dd-menu toggle-menu"
              role="navigation"
            >
              <ul className="sf-menu">
                {megaMenu.map(({ link, text, className, links }, index) =>
                  <li key={index} className={className}>
                    <Link to={link}>
                      {text} <i className="fas fa-angle-down"></i>
                    </Link>
                    <ul className="dropdown">
                      {links.map(({ link, text }, index) =>
                        <li key={index}><Link to={link}>{text}</Link></li>
                      )}
                    </ul>
                  </li>
                )}
                <MegaSearch />
              </ul>
            </nav>
            <div className="search-form">
              <div className="search-form-inner">
                <form>
                  <h3>Find a Car with our Quick Search</h3>
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="row">
                        <div className="col-md-6">
                          <label>Postcode</label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="col-md-6">
                          <label>Body Type</label>
                          <select
                            name="Body Type"
                            className="form-control selectpicker"
                          >
                            <option selected>Any</option>
                            <option>Wagon</option>
                            <option>Minivan</option>
                            <option>Coupe</option>
                            <option>Crossover</option>
                            <option>Van</option>
                            <option>SUV</option>
                            <option>Minicar</option>
                            <option>Sedan</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label>Make</label>
                          <select
                            name="Make"
                            className="form-control selectpicker"
                          >
                            <option selected>Any</option>
                            <option>Jaguar</option>
                            <option>BMW</option>
                            <option>Mercedes</option>
                            <option>Porsche</option>
                            <option>Nissan</option>
                            <option>Mazda</option>
                            <option>Acura</option>
                            <option>Audi</option>
                            <option>Bugatti</option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label>Model</label>
                          <select
                            name="Model"
                            className="form-control selectpicker"
                          >
                            <option selected>Any</option>
                            <option>GTX</option>
                            <option>GTR</option>
                            <option>GTS</option>
                            <option>RLX</option>
                            <option>M6</option>
                            <option>S Class</option>
                            <option>C Class</option>
                            <option>B Class</option>
                            <option>A Class</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label>Price Min</label>
                          <select
                            name="Min Price"
                            className="form-control selectpicker"
                          >
                            <option selected>Any</option>
                            <option>$10000</option>
                            <option>$20000</option>
                            <option>$30000</option>
                            <option>$40000</option>
                            <option>$50000</option>
                            <option>$60000</option>
                            <option>$70000</option>
                            <option>$80000</option>
                            <option>$90000</option>
                            <option>$100000</option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label>Price Max</label>
                          <select
                            name="Max Price"
                            className="form-control selectpicker"
                          >
                            <option selected>Any</option>
                            <option>$10000</option>
                            <option>$20000</option>
                            <option>$30000</option>
                            <option>$40000</option>
                            <option>$50000</option>
                            <option>$60000</option>
                            <option>$70000</option>
                            <option>$80000</option>
                            <option>$90000</option>
                            <option>$100000</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              id="inlineCheckbox1"
                              value="option1"
                            />{" "}
                            Brand new only
                          </label>
                          <label className="checkbox-inline">
                            <input
                              type="checkbox"
                              id="inlineCheckbox2"
                              value="option2"
                            />{" "}
                            Certified
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label>Min Year</label>
                          <select
                            name="Min Year"
                            className="form-control selectpicker"
                          >
                            <option selected>Any</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label>Max Year</label>
                          <select
                            name="Max Year"
                            className="form-control selectpicker"
                          >
                            <option selected>Any</option>
                            <option>2005</option>
                            <option>2006</option>
                            <option>2007</option>
                            <option>2008</option>
                            <option>2009</option>
                            <option>2010</option>
                            <option>2011</option>
                            <option>2012</option>
                            <option>2013</option>
                            <option>2014</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label>Min Mileage</label>
                          <select
                            name="Min Mileage"
                            className="form-control selectpicker"
                          >
                            <option selected>Any</option>
                            <option>10000</option>
                            <option>20000</option>
                            <option>30000</option>
                            <option>40000</option>
                            <option>50000</option>
                            <option>60000</option>
                            <option>70000</option>
                            <option>80000</option>
                            <option>90000</option>
                            <option>100000</option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label>Max Mileage</label>
                          <select
                            name="Max Mileage"
                            className="form-control selectpicker"
                          >
                            <option selected>Any</option>
                            <option>10000</option>
                            <option>20000</option>
                            <option>30000</option>
                            <option>40000</option>
                            <option>50000</option>
                            <option>60000</option>
                            <option>70000</option>
                            <option>80000</option>
                            <option>90000</option>
                            <option>100000</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label>Transmission</label>
                          <select
                            name="Transmission"
                            className="form-control selectpicker"
                          >
                            <option selected>Any</option>
                            <option>5 Speed Manual</option>
                            <option>5 Speed Automatic</option>
                            <option>6 Speed Manual</option>
                            <option>6 Speed Automatic</option>
                            <option>7 Speed Manual</option>
                            <option>7 Speed Automatic</option>
                            <option>8 Speed Manual</option>
                            <option>8 Speed Automatic</option>
                          </select>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <label>Body Color</label>
                          <select
                            name="Body Color"
                            className="form-control selectpicker"
                          >
                            <option selected>Any</option>
                            <option>Red</option>
                            <option>Black</option>
                            <option>White</option>
                            <option>Yellow</option>
                            <option>Brown</option>
                            <option>Grey</option>
                            <option>Silver</option>
                            <option>Gold</option>
                          </select>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-12">
                          <input
                            type="submit"
                            className="btn btn-block btn-info btn-lg"
                            value="Find my vehicle now"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MegaMenu;
