import React from "react"
import { Link } from "gatsby"
import L from "leaflet"

import { getAllCountriesInfo } from "../data/countries"

import Layout from "../components/Layout/Layout"
import SEO from "../components/Seo/Seo"
import Map from "../components/Map/Map"

const LOCATION = {
  lat: 40.416775,
  lng: -3.70379,
}
const CENTER = [LOCATION.lat, LOCATION.lng]
const DEFAULT_ZOOM = 2

const IndexPage = () => {
  async function mapEffect({ leafletElement } = {}) {
    if (!leafletElement) return

    leafletElement.eachLayer(layer => leafletElement.removeLayer(layer))

    getAllCountriesInfo().then(countries => {
      const countryPoints = createCountryPointsGeoJson({ countries })

      const countryPointsGeoJsonLayers = new L.geoJson(countryPoints, {
        pointToLayer: countryPointToLayer,
      })

      countryPointsGeoJsonLayers.addTo(leafletElement)
      const bounds = countryPointsGeoJsonLayers.getBounds()
      leafletElement.fitBounds(bounds)
    })
  }

  const mapSettings = {
    center: CENTER,
    defaultBaseMap: "OpenStreetMap",
    zoom: DEFAULT_ZOOM,
    mapEffect,
  }

  return (
    <Layout>
      <SEO title="Home" />

      <Map {...mapSettings}></Map>

      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage

function createCountryPointsGeoJson({ countries } = {}) {
  return {
    type: "FeatureCollection",
    features: countries.map(
      ({
        country,
        countryInfo = {},
        cases,
        todayCases,
        deaths,
        todayDeaths,
        recovered,
        active,
        critical,
        casesPerOneMillion,
        deathsPerOneMillion,
      } = {}) => {
        const { lat, long, flag, iso3 } = countryInfo
        return {
          type: "Feature",
          properties: {
            country,
            flag,
            cases,
            todayCases,
            deaths,
            todayDeaths,
            recovered,
            active,
            critical,
            casesPerOneMillion,
            deathsPerOneMillion,
            iso3,
          },
          geometry: {
            type: "Point",
            coordinates: [long, lat],
          },
        }
      }
    ),
  }
}

function countryPointToLayer(feature = {}, latlng) {
  const { properties = {} } = feature
  const {
    country,
    flag,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    active,
    critical,
    casesPerOneMillion,
    deathsPerOneMillion,
  } = properties

  let listString = ""
  let imageString = ""

  /* if (flag) {
    imageString = `
      <span class="point-image" style=“background-image: url(${flag})”>${country}</span>
    `
  } */

  const text = `
    <div class="map-point">
      ${imageString}
      <div class="point-content">
        <h2>${country}</h2>
        <ul>
          <li>Total cases: ${cases}</li>
        </ul>
      </div>
    </div>
  `

  const popup = L.popup({
    maxWidth: 400,
  }).setContent(text)

  const layer = L.marker(latlng, {
    icon: L.divIcon({
      className: "icon",
      html: `<span class="icon-point"></span>`,
      iconSize: 20,
    }),
    riseOnHover: true,
  }).bindPopup(popup)

  return layer
}
