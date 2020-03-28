import React from "react"

const Footer = () => {
  return (
    <footer className="footer bg-light p-3 mt-2 text-center small">
      <div class="container">
        © Rubén Rodríguez {new Date().getFullYear()} | Built with
        {` `}
        <a href="https://www.gatsbyjs.org" target="_blank">
          Gatsby
        </a>{" "}
        Using{" "}
        <a href="https://covid-19-apis.postman.com" target="_blank">
          Postman COVID-19 resources
        </a>{" "}
        and deployed with{" "}
        <a href="http://netlify.com/" target="_blank">
          Netlify
        </a>{" "}
        |{" "}
        <a href="https://github.com/rubenRP/covid-map" target="_blank">
          Contribute
        </a>
      </div>
    </footer>
  )
}

export default Footer
