import React, { Component } from "react"
import L from "leaflet"

import { Map, Marker, Popup, TileLayer } from "react-leaflet"

import { getAllCountriesInfo } from "../../api/covid"

const LOCATION = {
  lat: 40.416775,
  lng: -3.70379,
}
const CENTER = [LOCATION.lat, LOCATION.lng]
const DEFAULT_ZOOM = 2

class InfoMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      countries: [],
      maxCases: 0,
    }
  }
  componentDidMount = () => {
    getAllCountriesInfo().then(countries => {
      this.setState({ countries: countries, maxCases: countries[0].cases })
    })
  }
  render() {
    const mapSettings = {
      center: CENTER,
      defaultBaseMap: "OpenStreetMap",
      zoom: DEFAULT_ZOOM,
    }

    const MarkerList = () => {
      const { countries, maxCases } = this.state
      return countries.map(country => {
        const markerIcon = L.divIcon({
          className: "icon",
          html: `<span class="icon-point"></span>`,
          iconSize: 20,
        })

        return (
          <Marker
            key={country.countryInfo._id}
            position={[country.countryInfo.lat, country.countryInfo.long]}
            icon={markerIcon}
          >
            <Popup>
              <div className="card">
                <img src={country.countryInfo.flag} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{country.country}</h5>
                  <p className="card-text">
                    <div>
                      <strong>Total cases:</strong> {country.cases}
                    </div>
                    <div>
                      <strong>Active cases:</strong> {country.active}
                    </div>
                    <div>
                      <strong>Deaths:</strong> {country.deaths}
                    </div>
                    <div>
                      <strong>Recovered:</strong> {country.recovered}
                    </div>
                  </p>
                </div>
              </div>
            </Popup>
          </Marker>
        )
      })
    }
    return (
      <Map {...mapSettings}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <MarkerList />
      </Map>
    )
  }
}

export default InfoMap
