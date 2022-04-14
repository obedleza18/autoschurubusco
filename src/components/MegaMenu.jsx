import React from "react";

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
                <i className="fas fa-phone"></i> Call us{" "}
                <strong>1800 011 2211</strong> <em>or</em> search
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
                <li>
                  <a href="javascript:void(0)">Home</a>
                  <ul className="dropdown">
                    <li>
                      <a href="javascript:void(0)">Home versions</a>
                      <ul className="dropdown">
                        <li>
                          <a href="index.html">Default</a>
                        </li>
                        <li>
                          <a href="index2.html">Version 2</a>
                        </li>
                        <li>
                          <a href="index3.html">Version 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Slider versions</a>
                      <ul className="dropdown">
                        <li>
                          <a href="index.html">Default(Flexslider)</a>
                        </li>
                        <li>
                          <a href="index-revslider.html">
                            Slider Revolution{" "}
                            <span className="label label-danger">New</span>
                          </a>
                        </li>
                        <li>
                          <a href="hero-carousel.html">Full Width Carousel</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Search Form Positions</a>
                      <ul className="dropdown">
                        <li>
                          <a href="index.html">Default(With Main Menu)</a>
                        </li>
                        <li>
                          <a href="search-below-slider.html">Below Slider</a>
                        </li>
                        <li>
                          <a href="search-over-slider.html">Over Slider</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="javascript:void(0)">Header versions</a>
                      <ul className="dropdown">
                        <li>
                          <a href="index.html">Default</a>
                        </li>
                        <li>
                          <a href="header-v2.html">Version 2</a>
                        </li>
                        <li>
                          <a href="header-v3.html">Version 3</a>
                        </li>
                        <li>
                          <a href="header-v4.html">Version 4</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">Pages</a>
                  <ul className="dropdown">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="joinus.html">Signup</a>
                    </li>
                    <li>
                      <a href="404.html">404 Error Page</a>
                    </li>
                    <li>
                      <a href="add-listing-pricing.html">Pricing</a>
                    </li>
                    <li>
                      <a href="shortcodes.html">Shortcodes</a>
                    </li>
                    <li>
                      <a href="typography.html">Typography</a>
                    </li>
                    <li>
                      <a href="dealers-search.html">Dealer Search</a>
                    </li>
                    <li>
                      <a href="dealers-search-results.html">
                        Dealer Search Results
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="megamenu">
                  <a href="index.html">Mega Menu <i className="fas fa-angle-down"></i>
                  </a>
                  <ul className="dropdown">
                    <li>
                      <div className="megamenu-container container">
                        <div className="row">
                          <div className="mm-col col-md-2">
                            <ul className="sub-menu">
                              <li>
                                <a href="results-list.html">Brand new cars</a>
                              </li>
                              <li>
                                <a href="results-list.html">Used cars</a>
                              </li>
                              <li>
                                <a href="results-list.html">Latest reviews</a>
                              </li>
                              <li>
                                <a href="blog.html">Auto news</a>
                              </li>
                              <li>
                                <a href="about.html">Car insurance</a>
                              </li>
                            </ul>
                          </div>
                          <div className="mm-col col-md-5">
                            <span className="megamenu-sub-title">
                              Browse by body type
                            </span>
                            <ul className="body-type-widget">
                              <li>
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="images/body-types/wagon.png"
                                    alt=""
                                  />{" "}
                                  <span>Wagon</span>
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="images/body-types/minivan.png"
                                    alt=""
                                  />{" "}
                                  <span>Minivan</span>
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="images/body-types/coupe.png"
                                    alt=""
                                  />{" "}
                                  <span>Coupe</span>
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="images/body-types/convertible.png"
                                    alt=""
                                  />{" "}
                                  <span>Convertible</span>
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="images/body-types/crossover.png"
                                    alt=""
                                  />{" "}
                                  <span>Crossover</span>
                                </a>
                              </li>
                              <li>
                                {" "}
                                <a href="results-list.html">
                                  <img src="images/body-types/suv.png" alt="" />{" "}
                                  <span>SUV</span>
                                </a>
                              </li>
                            </ul>
                            <a href="results-list.html" className="basic-link">
                              view all
                            </a>
                          </div>
                          <div className="mm-col col-md-5">
                            <span className="megamenu-sub-title">
                              Browse by make
                            </span>
                            <ul className="make-widget">
                              <li className="item">
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li className="item">
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li className="item">
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li className="item">
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li className="item">
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li className="item">
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li className="item">
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER"
                                    alt=""
                                  />
                                </a>
                              </li>
                              <li className="item">
                                {" "}
                                <a href="results-list.html">
                                  <img
                                    src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER"
                                    alt=""
                                  />
                                </a>
                              </li>
                            </ul>
                            <a href="results-list.html" className="basic-link">
                              view all
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">Listing</a>
                  <ul className="dropdown">
                    <li>
                      <a href="results-list.html">List View</a>
                    </li>
                    <li>
                      <a href="results-grid.html">Grid View</a>
                    </li>
                    <li>
                      <a href="vehicle-details.html">Vehicle Details</a>
                    </li>
                    <li>
                      <a href="add-listing-form.html">Add new listing</a>
                    </li>
                    <li>
                      <a href="vehicle-comparision.html">Vehicle Comparision</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">Users</a>
                  <ul className="dropdown">
                    <li>
                      <a href="dealer-prosite.html">Dealer Prosite</a>
                    </li>
                    <li>
                      <a href="user-dashboard.html">User Dashboard</a>
                    </li>
                    <li>
                      <a href="user-dashboard-saved-searches.html">
                        Manage Saved Searches
                      </a>
                    </li>
                    <li>
                      <a href="user-dashboard-saved-cars.html">
                        Manage Saved Cars
                      </a>
                    </li>
                    <li>
                      <a href="user-dashboard-manage-ads.html">Manage Ads</a>
                    </li>
                    <li>
                      <a href="user-dashboard-profile.html">User Profile</a>
                    </li>
                    <li>
                      <a href="user-dashboard-settings.html">User Settings</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">Gallery</a>
                  <ul className="dropdown">
                    <li>
                      <a href="gallery-2cols.html">Gallery 2 Columns</a>
                    </li>
                    <li>
                      <a href="gallery-3cols.html">Gallery 3 Columns</a>
                    </li>
                    <li>
                      <a href="gallery-4cols.html">Gallery 4 Columns</a>
                    </li>
                    <li>
                      <a href="gallery-2cols-details.html">
                        Gallery 2 Columns with Details
                      </a>
                    </li>
                    <li>
                      <a href="gallery-3cols-details.html">
                        Gallery 3 Columns with Details
                      </a>
                    </li>
                    <li>
                      <a href="gallery-4cols-details.html">
                        Gallery 4 Columns with Details
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0)">Blog</a>
                  <ul className="dropdown">
                    <li>
                      <a href="blog.html">Blog List</a>
                    </li>
                    <li>
                      <a href="blog-masonry.html">Blog Masonry</a>
                    </li>
                    <li>
                      <a href="single-post.html">Single Post</a>
                    </li>
                    <li>
                      <a href="single-post-review.html">Single Review Post</a>
                    </li>
                  </ul>
                </li>
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
