import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"

const About = () => (
  <Layout>
    <SEO title="About COVID-19 Info" />
    <h1 className="mt-5 mb-4">About COVID-19 Info</h1>
    <h2>The Project</h2>
    <p>
      This project started as a Gatsby starter project and evolved into a
      website with up-to-date data and an interactive map. It's made with ❤️
      using Gatsby, Leaflet and Postman API Resources. You can check the
      repository on{" "}
      <a href="https://github.com/rubenRP/covid-map" target="_blank">
        Github
      </a>{" "}
      and the{" "}
      <a href="" target="_blank">
        blog post
      </a>{" "}
      talking about the implementation.
    </p>
    <h2>Me</h2>
    <p>
      I'm Rubén Rodríguez, a Madrid Based developer. You can know something more
      about me at{" "}
      <a href="rubenr.dev" target="_blank">
        rubenr.dev
      </a>
    </p>
    <h2>Data Source</h2>
    <p className="mb-5">
      This app load data from{" "}
      <a
        href="https://documenter.getpostman.com/view/8854915/SzS7R6uu?version=latest"
        target="_blank"
      >
        NovelCOVID
      </a>
      , an API for Current cases and more stuff about COVID-19 or the Novel
      Coronavirus Strain.
    </p>
  </Layout>
)

export default About
