import React, { Component } from "react"

import { getAllCountriesInfo } from "../api/covid"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import InfoMap from "../components/InfoMap/InfoMap"
import Table from "../components/Table/Table"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
    }
  }
  componentDidMount = () => {
    getAllCountriesInfo().then(countries => {
      this.setState({ countries: countries })
    })
  }
  render() {
    const { countries } = this.state
    return (
      <Layout>
        <SEO title="Home" />
        <div className="jumbotron mt-5 mb-4">
          <h1 className="display-4">COVID-19</h1>
          <p className="lead">
            COVID-19 is the infectious disease caused by the most recently
            discovered coronavirus. This new virus and disease were unknown
            before the outbreak began in Wuhan, China, in December 2019.
          </p>
        </div>
        <h1 className="mt-5 mb-4">Updated Map</h1>
        <div className="row">
          <div className="col-12">
            <InfoMap countries={countries} />
          </div>
          <div className="col-12 mt-5">
            <h2>Top 15 infected countries overview</h2>
            {countries.length ? (
              <Table countries={countries.slice(0, 15)} />
            ) : (
              ""
            )}
          </div>
        </div>
      </Layout>
    )
  }
}
export default IndexPage
