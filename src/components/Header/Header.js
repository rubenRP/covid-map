import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Image from "../Image/Image"

const Header = ({ siteTitle }) => (
  <header className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link to="/" className="navbar-brand">
      <span>{siteTitle}</span>
    </Link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item ">
          <Link to="/" activeClassName="active" className="nav-link">
            Home <span class="sr-only">(current)</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            activeClassName="active"
            to="/detailed-report/"
            className="nav-link"
          >
            Detailed Report
          </Link>
        </li>
        <li activeClassName="active" className="nav-item">
          <Link activeClassName="active" to="/about/" className="nav-link">
            About
          </Link>
        </li>
      </ul>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
