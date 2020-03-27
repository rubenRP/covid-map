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
        <h1 className="mt-5 mb-4">COVID19 Updated Info</h1>
        <div className="row">
          <div className="col-12">
            <InfoMap countries={countries} />
          </div>
          <div className="col-12 mt-5">
            <h2>Top countries</h2>
            <Table countries={countries} />
          </div>
        </div>
      </Layout>
    )
  }
}
export default IndexPage
