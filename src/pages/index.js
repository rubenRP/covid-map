import React, { Component } from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import InfoMap from "../components/InfoMap/InfoMap"

class IndexPage extends Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <h1 class="mt-5 mb-4">COVID19 Updated Info Map</h1>
        <InfoMap />
      </Layout>
    )
  }
}
export default IndexPage
