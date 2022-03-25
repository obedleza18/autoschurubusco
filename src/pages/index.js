import * as React from "react"
import TopHeader from "../components/TopHeader"
import { graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => {
  const tagline = 'Buying or Selling,<br />just got easier!'
  const links = [
    { link: '/404', text: 'Buy' },
    { link: 'add-listing-pricing.html', text: 'Sell' },
    { link: 'joinus.html', text: 'Join' }
  ]

  return (
    <>
      <header className="site-header-wrapper">
        <TopHeader tagline={tagline} links={links} logo={getImage(data.file)} />
        <nav className="navbar">
          <div className="container">
            <div className="col-12">
              <div className="display-flex nav-in">
                <div className="search-function">
                  <a href="#" className="search-trigger"><i className="fas fa-search"></i></a>
                  <span><i className="fas fa-phone"></i> Call us <strong>1800 011 2211</strong> <em>or</em> search</span>
                </div>
                <a href="#" className="visible-sm visible-xs" id="menu-toggle"><i className="fas fa-bars"></i></a>
                <nav className="main-navigation dd-menu toggle-menu" role="navigation">
                  <ul className="sf-menu">
                    <li><a href="javascript:void(0)">Home</a>
                      <ul className="dropdown">
                        <li><a href="javascript:void(0)">Home versions</a>
                          <ul className="dropdown">
                            <li><a href="index.html">Default</a></li>
                            <li><a href="index2.html">Version 2</a></li>
                            <li><a href="index3.html">Version 3</a></li>
                          </ul>
                        </li>
                        <li><a href="javascript:void(0)">Slider versions</a>
                          <ul className="dropdown">
                            <li><a href="index.html">Default(Flexslider)</a></li>
                            <li><a href="index-revslider.html">Slider Revolution <span className="label label-danger">New</span></a></li>
                            <li><a href="hero-carousel.html">Full Width Carousel</a></li>
                          </ul>
                        </li>
                        <li><a href="javascript:void(0)">Search Form Positions</a>
                          <ul className="dropdown">
                            <li><a href="index.html">Default(With Main Menu)</a></li>
                            <li><a href="search-below-slider.html">Below Slider</a></li>
                            <li><a href="search-over-slider.html">Over Slider</a></li>
                          </ul>
                        </li>
                        <li><a href="javascript:void(0)">Header versions</a>
                          <ul className="dropdown">
                            <li><a href="index.html">Default</a></li>
                            <li><a href="header-v2.html">Version 2</a></li>
                            <li><a href="header-v3.html">Version 3</a></li>
                            <li><a href="header-v4.html">Version 4</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li><a href="javascript:void(0)">Pages</a>
                      <ul className="dropdown">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="joinus.html">Signup</a></li>
                        <li><a href="404.html">404 Error Page</a></li>
                        <li><a href="add-listing-pricing.html">Pricing</a></li>
                        <li><a href="shortcodes.html">Shortcodes</a></li>
                        <li><a href="typography.html">Typography</a></li>
                        <li><a href="dealers-search.html">Dealer Search</a></li>
                        <li><a href="dealers-search-results.html">Dealer Search Results</a></li>
                      </ul>
                    </li>
                    <li className="megamenu"><a href="index.html">Mega Menu</a>
                      <ul className="dropdown">
                        <li>
                          <div className="megamenu-container container">
                            <div className="row">
                              <div className="mm-col col-md-2">
                                <ul className="sub-menu">
                                  <li><a href="results-list.html">Brand new cars</a></li>
                                  <li><a href="results-list.html">Used cars</a></li>
                                  <li><a href="results-list.html">Latest reviews</a></li>
                                  <li><a href="blog.html">Auto news</a></li>
                                  <li><a href="about.html">Car insurance</a></li>
                                </ul>
                              </div>
                              <div className="mm-col col-md-5">
                                <span className="megamenu-sub-title">Browse by body type</span>
                                <ul className="body-type-widget">
                                  <li> <a href="results-list.html"><img src="images/body-types/wagon.png" alt="" /> <span>Wagon</span></a></li>
                                  <li> <a href="results-list.html"><img src="images/body-types/minivan.png" alt="" /> <span>Minivan</span></a></li>
                                  <li> <a href="results-list.html"><img src="images/body-types/coupe.png" alt="" /> <span>Coupe</span></a></li>
                                  <li> <a href="results-list.html"><img src="images/body-types/convertible.png" alt="" /> <span>Convertible</span></a></li>
                                  <li> <a href="results-list.html"><img src="images/body-types/crossover.png" alt="" /> <span>Crossover</span></a></li>
                                  <li> <a href="results-list.html"><img src="images/body-types/suv.png" alt="" /> <span>SUV</span></a></li>
                                </ul>
                                <a href="results-list.html" className="basic-link">view all</a>
                              </div>
                              <div className="mm-col col-md-5">
                                <span className="megamenu-sub-title">Browse by make</span>
                                <ul className="make-widget">
                                  <li className="item"> <a href="results-list.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                                  <li className="item"> <a href="results-list.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                                  <li className="item"> <a href="results-list.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                                  <li className="item"> <a href="results-list.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                                  <li className="item"> <a href="results-list.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                                  <li className="item"> <a href="results-list.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                                  <li className="item"> <a href="results-list.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                                  <li className="item"> <a href="results-list.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                                </ul>
                                <a href="results-list.html" className="basic-link">view all</a>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li><a href="javascript:void(0)">Listing</a>
                      <ul className="dropdown">
                        <li><a href="results-list.html">List View</a></li>
                        <li><a href="results-grid.html">Grid View</a></li>
                        <li><a href="vehicle-details.html">Vehicle Details</a></li>
                        <li><a href="add-listing-form.html">Add new listing</a></li>
                        <li><a href="vehicle-comparision.html">Vehicle Comparision</a></li>
                      </ul>
                    </li>
                    <li><a href="javascript:void(0)">Users</a>
                      <ul className="dropdown">
                        <li><a href="dealer-prosite.html">Dealer Prosite</a></li>
                        <li><a href="user-dashboard.html">User Dashboard</a></li>
                        <li><a href="user-dashboard-saved-searches.html">Manage Saved Searches</a></li>
                        <li><a href="user-dashboard-saved-cars.html">Manage Saved Cars</a></li>
                        <li><a href="user-dashboard-manage-ads.html">Manage Ads</a></li>
                        <li><a href="user-dashboard-profile.html">User Profile</a></li>
                        <li><a href="user-dashboard-settings.html">User Settings</a></li>
                      </ul>
                    </li>
                    <li><a href="javascript:void(0)">Gallery</a>
                      <ul className="dropdown">
                        <li><a href="gallery-2cols.html">Gallery 2 Columns</a></li>
                        <li><a href="gallery-3cols.html">Gallery 3 Columns</a></li>
                        <li><a href="gallery-4cols.html">Gallery 4 Columns</a></li>
                        <li><a href="gallery-2cols-details.html">Gallery 2 Columns with Details</a></li>
                        <li><a href="gallery-3cols-details.html">Gallery 3 Columns with Details</a></li>
                        <li><a href="gallery-4cols-details.html">Gallery 4 Columns with Details</a></li>
                      </ul>
                    </li>
                    <li><a href="javascript:void(0)">Blog</a>
                      <ul className="dropdown">
                        <li><a href="blog.html">Blog List</a></li>
                        <li><a href="blog-masonry.html">Blog Masonry</a></li>
                        <li><a href="single-post.html">Single Post</a></li>
                        <li><a href="single-post-review.html">Single Review Post</a></li>
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
                              <select name="Body Type" className="form-control selectpicker">
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
                              <select name="Make" className="form-control selectpicker">
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
                              <select name="Model" className="form-control selectpicker">
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
                              <select name="Min Price" className="form-control selectpicker">
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
                              <select name="Max Price" className="form-control selectpicker">
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
                                <input type="checkbox" id="inlineCheckbox1" value="option1" /> Brand new only
                              </label>
                              <label className="checkbox-inline">
                                <input type="checkbox" id="inlineCheckbox2" value="option2" /> Certified
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6">
                          <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                              <label>Min Year</label>
                              <select name="Min Year" className="form-control selectpicker">
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
                              <select name="Max Year" className="form-control selectpicker">
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
                              <select name="Min Mileage" className="form-control selectpicker">
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
                              <select name="Max Mileage" className="form-control selectpicker">
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
                              <select name="Transmission" className="form-control selectpicker">
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
                              <select name="Body Color" className="form-control selectpicker">
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
                              <input type="submit" className="btn btn-block btn-info btn-lg" value="Find my vehicle now" />
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
      </header>
      <div className="hero-area">
        <div className="hero-slider heroflex flexslider clearfix" data-autoplay="yes" data-pagination="no" data-arrows="yes" data-style="fade" data-speed="7000" data-pause="yes">
          <ul className="slides">
            <li className="parallax" style={{backgroundImage: 'url(https://via.placeholder.com/1400x500?text=IMAGE+PLACEHOLDER)'}}></li>
            <li className="parallax" style={{backgroundImage: 'url(https://via.placeholder.com/1400x500?text=IMAGE+PLACEHOLDER)'}}></li>
          </ul>
        </div>
      </div>
      <section className="utility-bar">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-5">
              <div className="toggle-make">
                <a href="#"><i className="fas fa-bars"></i></a>
                <span>Browse by body style</span>
              </div>
            </div>
            <div className="col-md-8 col-sm-6 col-7">
              <ul className="utility-icons social-icons social-icons-colored">
                <li className="facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li className="twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li className="googleplus"><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                <li className="linkedin"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <section className="by-type-options">
          <div className="container">
            <div className="carousel-row">
              <ul className="owl-carousel carousel-alt" data-columns="6" data-autoplay="" data-pagination="no" data-arrows="yes" data-single-item="no" data-items-desktop="6" data-items-desktop-small="4" data-items-mobile="3" data-items-tablet="4">
                <li className="item"> <a href="results-list.html"><img src="images/body-types/wagon.png" alt="" /> <span>Wagon</span></a></li>
                <li className="item"> <a href="results-list.html"><img src="images/body-types/minivan.png" alt="" /> <span>Minivan</span></a></li>
                <li className="item"> <a href="results-list.html"><img src="images/body-types/coupe.png" alt="" /> <span>Coupe</span></a></li>
                <li className="item"> <a href="results-list.html"><img src="images/body-types/convertible.png" alt="" /> <span>Convertible</span></a></li>
                <li className="item"> <a href="results-list.html"><img src="images/body-types/crossover.png" alt="" /> <span>Crossover</span></a></li>
                <li className="item"> <a href="results-list.html"><img src="images/body-types/suv.png" alt="" /> <span>SUV</span></a></li>
                <li className="item"> <a href="results-list.html#"><img src="images/body-types/minicar.png" alt="" /> <span>Minicar</span></a></li>
                <li className="item"> <a href="results-list.html"><img src="images/body-types/sedan.png" alt="" /> <span>Sedan</span></a></li>
              </ul>
            </div>
          </div>
        </section>
      </section>
      <section className="main" role="main">
        <div id="content" className="content full padding-b0">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <h1 className="uppercase strong">Welcome to AutoStars<br />Listing portal</h1>
                <p className="lead">AutoStars is the world's leading portal for<br />easy and quick <span className="accent-color">car buying and selling</span></p>
              </div>
              <div className="col-lg-6 col-md-12">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet, <span className="accent-color">consectetur adipiscing</span> elit. Nulla convallis egestas rhoncus.</p>
              </div>
            </div>
            <div className="spacer-75"></div>
            <section className="listing-block recent-vehicles">
              <div className="listing-header">
                <h3>Recently Listed Vehicles</h3>
              </div>
              <div className="listing-container">
                <div className="carousel-wrapper">
                  <div className="carousel-row">
                    <ul className="owl-carousel carousel-fw" id="vehicle-slider" data-columns="4" data-autoplay="" data-pagination="yes" data-arrows="no" data-single-item="no" data-items-desktop="4" data-items-desktop-small="3" data-items-tablet="2" data-items-mobile="1">
                      <li className="item">
                        <div className="vehicle-block format-standard">
                          <a href="vehicle-details.html" className="media-box"><img src="https://via.placeholder.com/600x400?text=IMAGE+PLACEHOLDER" alt="" /></a>
                          <div className="vehicle-block-content">
                            <span className="label label-default vehicle-age">2020</span>
                            <span className="label label-success premium-listing">Premium Listing</span>
                            <h5 className="vehicle-title"><a href="vehicle-details.html">Top Luxury Cars</a></h5>
                            <span className="vehicle-meta">Grey color, by <abbr className="user-type" title="Listed by an individual user">Individual</abbr></span>
                            <div className="display-flex space-between row-reverse">
                              <a href="results-list.html" title="View all Sedans" className="vehicle-body-type"><img src="images/body-types/sedan.png" width="30" alt="" /></a>
                              <span className="vehicle-cost">$48500</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="vehicle-block format-standard">
                          <a href="vehicle-details.html" className="media-box"><img src="https://via.placeholder.com/600x400?text=IMAGE+PLACEHOLDER" alt="" /></a>
                          <div className="vehicle-block-content">
                            <span className="label label-primary vehicle-age">Brand New</span>
                            <h5 className="vehicle-title"><a href="vehicle-details.html">Top Hatchbacks</a></h5>
                            <span className="vehicle-meta">Brown beige, by <abbr className="user-type" title="Listed by an dealer">Dealer</abbr></span>
                            <div className="display-flex space-between row-reverse">
                              <a href="results-list.html" title="View all SUVs" className="vehicle-body-type"><img src="images/body-types/suv.png" width="30" alt="" /></a>
                              <span className="vehicle-cost">$28000</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="vehicle-block format-standard">
                          <a href="vehicle-details.html" className="media-box"><img src="https://via.placeholder.com/600x400?text=IMAGE+PLACEHOLDER" alt="" /></a>
                          <div className="vehicle-block-content">
                            <span className="label label-default vehicle-age">2020</span>
                            <h5 className="vehicle-title"><a href="vehicle-details.html">ZS EV E Class</a></h5>
                            <span className="vehicle-meta">Silver Blue, by <abbr className="user-type" title="Listed by an individual">Individual</abbr></span>
                            <div className="display-flex space-between row-reverse">
                              <a href="results-list.html" title="View all convertibles" className="vehicle-body-type"><img src="images/body-types/convertible.png" width="30" alt="" /></a>
                              <span className="vehicle-cost">$76000</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="vehicle-block format-standard">
                          <a href="vehicle-details.html" className="media-box"><img src="https://via.placeholder.com/600x400?text=IMAGE+PLACEHOLDER" alt="" /></a>
                          <div className="vehicle-block-content">
                            <span className="label label-default vehicle-age">2020</span>
                            <h5 className="vehicle-title"><a href="vehicle-details.html">Newly launched Rapid TSI</a></h5>
                            <span className="vehicle-meta">Brown beige, by <abbr className="user-type" title="Listed by Autostars">Autostars</abbr></span>
                            <div className="display-flex space-between row-reverse">
                              <a href="results-list.html" title="View all coupes" className="vehicle-body-type"><img src="images/body-types/coupe.png" width="30" alt="" /></a>
                              <span className="vehicle-cost">$31999</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="vehicle-block format-standard">
                          <a href="vehicle-details.html" className="media-box"><img src="https://via.placeholder.com/600x400?text=IMAGE+PLACEHOLDER" alt="" /></a>
                          <div className="vehicle-block-content">
                            <span className="label label-default vehicle-age">2020</span>
                            <span className="label label-success premium-listing">Premium Listing</span>
                            <h5 className="vehicle-title"><a href="vehicle-details.html">Seltos 300</a></h5>
                            <span className="vehicle-meta">Grey color, by <abbr className="user-type" title="Listed by an individual user">Individual</abbr></span>
                            <div className="display-flex space-between row-reverse">
                              <a href="results-list.html" title="View all Sedans" className="vehicle-body-type"><img src="images/body-types/sedan.png" width="30" alt="" /></a>
                              <span className="vehicle-cost">$48500</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="vehicle-block format-standard">
                          <a href="vehicle-details.html" className="media-box"><img src="https://via.placeholder.com/600x400?text=IMAGE+PLACEHOLDER" alt="" /></a>
                          <div className="vehicle-block-content">
                            <span className="label label-primary vehicle-age">Brand New</span>
                            <h5 className="vehicle-title"><a href="vehicle-details.html">Kona Electric first hand</a></h5>
                            <span className="vehicle-meta">Brown beige, by <abbr className="user-type" title="Listed by an dealer">Dealer</abbr></span>
                            <div className="display-flex space-between row-reverse">
                              <a href="results-list.html" title="View all SUVs" className="vehicle-body-type"><img src="images/body-types/suv.png" width="30" alt="" /></a>
                              <span className="vehicle-cost">$28000</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="vehicle-block format-standard">
                          <a href="vehicle-details.html" className="media-box"><img src="https://via.placeholder.com/600x400?text=IMAGE+PLACEHOLDER" alt="" /></a>
                          <div className="vehicle-block-content">
                            <span className="label label-default vehicle-age">2020</span>
                            <h5 className="vehicle-title"><a href="vehicle-details.html">Superb E Class</a></h5>
                            <span className="vehicle-meta">Silver Blue, by <abbr className="user-type" title="Listed by an individual">Individual</abbr></span>
                            <div className="display-flex space-between row-reverse">
                              <a href="results-list.html" title="View all convertibles" className="vehicle-body-type"><img src="images/body-types/convertible.png" width="30" alt="" /></a>
                              <span className="vehicle-cost">$76000</span>
                            </div>
                          </div>
                        </div>
                      </li>
                      <li className="item">
                        <div className="vehicle-block format-standard">
                          <a href="vehicle-details.html" className="media-box"><img src="https://via.placeholder.com/600x400?text=IMAGE+PLACEHOLDER" alt="" /></a>
                          <div className="vehicle-block-content">
                            <span className="label label-default vehicle-age">2020</span>
                            <h5 className="vehicle-title"><a href="vehicle-details.html">Newly launched Venue</a></h5>
                            <span className="vehicle-meta">Brown beige, by <abbr className="user-type" title="Listed by Autostars">Autostars</abbr></span>
                            <div className="display-flex space-between row-reverse">
                              <a href="results-list.html" title="View all coupes" className="vehicle-body-type"><img src="images/body-types/coupe.png" width="30" alt="" /></a>
                              <span className="vehicle-cost">$31999</span>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <div className="spacer-60"></div>
            <div className="row">
              <div className="col-lg-8 col-md-12">
                <section className="listing-block latest-news">
                  <div className="listing-header display-flex row-reverse space-between">
                    <div><a href="blog.html" className="btn btn-sm btn-default">All news</a></div>
                    <h3>Latest auto news</h3>
                  </div>
                  <div className="listing-container">
                    <div className="carousel-wrapper">
                      <div className="carousel-row">
                        <ul className="owl-carousel" id="news-slider" data-columns="2" data-autoplay="" data-pagination="yes" data-arrows="yes" data-single-item="no" data-items-desktop="2" data-items-desktop-small="1" data-items-tablet="2" data-items-mobile="1">
                          <li className="item">
                            <div className="post-block format-standard">
                              <a href="single-post.html" className="media-box post-image"><img src="https://via.placeholder.com/600x400?text=IMAGE+PLACEHOLDER" alt="" /></a>
                              <div className="post-actions">
                                <div className="post-date">December 05, 2020</div>
                                <div className="comment-count"><a href="single-post.html"><i className="icon-dialogue-text"></i> 12</a></div>
                              </div>
                              <h3 className="post-title"><a href="single-post.html">Suspendisse eget ligula in nulla iaculis interdum nec</a></h3>
                              <div className="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus...</p>
                              </div>
                              <div className="post-meta">
                                Posted in: <a href="blog-masonry.html">Financial</a>
                              </div>
                            </div>
                          </li>
                          <li className="item">
                            <div className="post-block format-standard">
                              <a href="single-post.html" className="media-box post-image"><img src="https://via.placeholder.com/600x400?text=IMAGE+PLACEHOLDER" alt="" /></a>
                              <div className="post-actions">
                                <div className="post-date">November 29, 2020</div>
                                <div className="comment-count"><a href="#"><i className="icon-dialogue-text"></i> 0</a></div>
                              </div>
                              <h3 className="post-title"><a href="single-post.html">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h3>
                              <div className="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus...</p>
                              </div>
                              <div className="post-meta">
                                Posted in: <a href="blog-masonry.html">New Launch</a>
                              </div>
                            </div>
                          </li>
                          <li className="item">
                            <div className="post-block format-standard">
                              <a href="single-post.html" className="media-box post-image"><img src="https://via.placeholder.com/600x400?text=IMAGE+PLACEHOLDER" alt="" /></a>
                              <div className="post-actions">
                                <div className="post-date">November 27, 2020</div>
                                <div className="comment-count"><a href="#"><i className="icon-dialogue-text"></i> 0</a></div>
                              </div>
                              <h3 className="post-title"><a href="single-post.html">2015 Proin enim quam, vulputate</a></h3>
                              <div className="post-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus...</p>
                              </div>
                              <div className="post-meta">
                                Posted in: <a href="blog-masonry.html">Trial run</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="spacer-40"></div>
                <section className="listing-block latest-testimonials">
                  <div className="listing-header">
                    <h3>Testimonials</h3>
                  </div>
                  <div className="listing-container">
                    <div className="carousel-wrapper">
                      <div className="carousel-row">
                        <ul className="owl-carousel carousel-fw" id="testimonials-slider" data-columns="2" data-autoplay="5000" data-pagination="no" data-arrows="no" data-single-item="no" data-items-desktop="2" data-items-desktop-small="1" data-items-tablet="1" data-items-mobile="1">
                          <li className="item">
                            <div className="testimonial-block">
                              <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                              </blockquote>
                              <div className="display-flex">
                                <div className="testimonial-avatar"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" width="60" height="60" /></div>
                                <div className="testimonial-info">
                                  <strong>Arthur Henry</strong><span>Carsales Inc</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="item">
                            <div className="testimonial-block">
                              <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                              </blockquote>
                              <div className="display-flex">
                                <div className="testimonial-avatar"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" width="60" height="60" /></div>
                                <div className="testimonial-info">
                                  <strong>Lori Bailey</strong><span>My car Experts</span>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="item">
                            <div className="testimonial-block">
                              <blockquote>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam.</p>
                              </blockquote>
                              <div className="display-flex">
                                <div className="testimonial-avatar"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" width="60" height="60" /></div>
                                <div className="testimonial-info">
                                  <strong>Willie &amp; Heather Obrien</strong>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div className="col-lg-4 col-md-12 sidebar">
                <section className="listing-block latest-reviews">
                  <div className="listing-header display-flex row-reverse space-between">
                    <div><a href="blog-masonry.html" className="btn btn-sm btn-default">All reviews</a></div>
                    <h3>Recent reviews</h3>
                  </div>
                  <div className="listing-container">
                    <div className="post-block post-review-block">
                      <div className="review-status">
                        <strong>3.6</strong>
                        <span>Out of 5</span>
                      </div>
                      <div className="post-block-items">
                        <h3 className="post-title"><a href="single-post-review.html">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a></h3>
                        <div className="post-content">
                          <div className="post-actions">
                            <div className="post-date">November 29, 2020</div>
                            <div className="comment-count"><i className="far fa-thumbs-up"></i> 3 <i className="far fa-thumbs-down"></i> 0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post-block post-review-block">
                      <div className="review-status">
                        <strong>4.1</strong>
                        <span>Out of 5</span>
                      </div>
                      <div className="post-block-items">
                        <h3 className="post-title"><a href="single-post-review.html">Curabitur nec nulla lectus, non hendrerit lorem porttitor</a></h3>
                        <div className="post-content">
                          <div className="post-actions">
                            <div className="post-date">November 14, 2020</div>
                            <div className="comment-count"><i className="far fa-thumbs-up"></i> 7 <i className="far fa-thumbs-down"></i> 1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="post-block post-review-block">
                      <div className="review-status">
                        <strong>5.0</strong>
                        <span>Out of 5</span>
                      </div>
                      <div className="post-block-items">
                        <h3 className="post-title"><a href="single-post-review.html">2020 Proin enim quam, vulputate at lobortis quis</a></h3>
                        <div className="post-content">
                          <div className="post-actions">
                            <div className="post-date">October 31, 2020</div>
                            <div className="comment-count"><i className="far fa-thumbs-up"></i> 11 <i className="far fa-thumbs-down"></i> 0</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="spacer-40"></div>
                <section className="connect-with-us widget-block">
                  <h4><i className="fa fa-rss"></i> Connect with us</h4>
                  <form role="form">
                    <label for="NewsletterInput" className="sr-only">Email</label>
                    <input type="email" className="form-control" id="NewsletterInput" placeholder="Subscribe via email" />
                    <button type="submit" className="btn btn-sm btn-primary">Subscribe</button>
                    <span className="meta-data">Don't worry, we won't spam you</span>
                  </form>
                  <hr />
                  <h4><i className="fab fa-twitter"></i> Twitter feed</h4>
                  <div className="twitter-widget" data-tweets-count="2"></div>
                </section>
              </div>
            </div>
          </div>
          <div className="spacer-50"></div>
          <div className="lgray-bg make-slider">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h3>Search by make </h3>
                  <a href="#" className="btn btn-default btn-lg">All make &amp; models</a>
                </div>
                <div className="col-md-9">
                  <div className="carousel-row">
                    <ul className="owl-carousel" id="make-carousel" data-columns="5" data-autoplay="6000" data-pagination="no" data-arrows="no" data-single-item="no" data-items-desktop="5" data-items-desktop-small="4" data-items-tablet="3" data-items-mobile="3">
                      <li className="item"> <a href="results-grid.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                      <li className="item"> <a href="results-grid.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                      <li className="item"> <a href="results-grid.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                      <li className="item"> <a href="results-grid.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                      <li className="item"> <a href="results-grid.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                      <li className="item"> <a href="results-grid.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                      <li className="item"> <a href="results-grid.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                      <li className="item"> <a href="results-grid.html"><img src="https://via.placeholder.com/100x100?text=IMAGE+PLACEHOLDER" alt="" /></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="site-footer">
        <div className="site-footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer_widget widget widget_newsletter">
                <h4 className="widgettitle">Sign up for our newsletter</h4>
                <form>
                  <input type="text" className="form-control" placeholder="Name" />
                  <input type="email" className="form-control" placeholder="Email" />
                  <input type="submit" className="btn btn-primary btn-lg" value="Sign up now" />
                </form>
              </div>
              <div className="col-lg-2 col-md-6 footer_widget widget widget_custom_menu widget_links">
                <h4 className="widgettitle">Blogroll</h4>
                <ul>
                  <li><a href="blog.html">Car News</a></li>
                  <li><a href="blog-masonry.html">Car Reviews</a></li>
                  <li><a href="about.html">Car Insurance</a></li>
                  <li><a href="about-html">Bodyshop</a></li>
                </ul>
              </div>
              <div className="col-lg-2 col-md-6 footer_widget widget widget_custom_menu widget_links">
                <h4 className="widgettitle">Help &amp; Support</h4>
                <ul>
                  <li><a href="results-list.html">Buying a car</a></li>
                  <li><a href="joinus.html">Selling a car</a></li>
                  <li><a href="about.html">Online safety</a></li>
                  <li><a href="contact.html">Contact us</a></li>
                </ul>
              </div>
              <div className="col-lg-5 col-md-6 footer_widget widget text_widget">
                <h4 className="widgettitle">About AutoStars</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus. Donec facilisis fermentum sem, ac viverra ante luctus vel. Donec vel mauris quam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis egestas rhoncus.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="site-footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 copyrights-left">
                <p>&copy; 2022 AutoStars. All Rights Reserved</p>
              </div>
              <div className="col-lg-6 col-md-6 copyrights-right">
                <ul className="social-icons social-icons-colored">
                  <li className="facebook"><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li className="twitter"><a href="#"><i className="fab fa-twitter"></i></a></li>
                  <li className="linkedin"><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                  <li className="youtube"><a href="#"><i className="fab fa-youtube"></i></a></li>
                  <li className="flickr"><a href="#"><i className="fab fa-flickr"></i></a></li>
                  <li className="vimeo"><a href="#"><i className="fab fa-vimeo-square"></i></a></li>
                  <li className="digg"><a href="#"><i className="fab fa-digg"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a id="back-to-top"><i className="fas fa-angle-double-up"></i></a>
    </>
  )
}

export default IndexPage

export const data = graphql`
  query {
    file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`