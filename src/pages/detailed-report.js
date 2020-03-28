import React, { Component } from "react"

import { getAllCountriesInfo } from "../api/covid"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import Table from "../components/Table/Table"

class SecondPage extends Component {
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
        <SEO title="COVID-19 Detailed Report (Updated)" />
        <h1 className="mt-5 mb-4">
          COVID-19 Detailed Report <small>(Updated)</small>
        </h1>
        <div className="row">
          <div className="col-12">
            <Table countries={countries} />
          </div>
        </div>
      </Layout>
    )
  }
}

export default SecondPage
