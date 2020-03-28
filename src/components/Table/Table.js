import React from "react"

const TableRow = ({ countries }) => {
  return countries.map(country => {
    return (
      <tr>
        <th scope="row">
          <img src={country.countryInfo.flag} className="table-flag" />
        </th>
        <td>{country.country}</td>
        <td>{country.cases}</td>
        <td>{country.deaths}</td>
        <td>{country.recovered}</td>
        <td>{country.todayCases}</td>
        <td>{country.todayDeaths}</td>
      </tr>
    )
  })
}

const Table = ({ countries }) => (
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Country</th>
          <th scope="col">Total</th>
          <th scope="col">Deaths</th>
          <th scope="col">Recovered</th>
          <th scope="col">Today Cases</th>
          <th scope="col">Today Deaths</th>
        </tr>
      </thead>
      <tbody>
        <TableRow countries={countries} />
      </tbody>
    </table>
  </div>
)

export default Table
