const axios = require("axios")

export async function getAllCountriesInfo() {
  let res = await axios.get("https://corona.lmao.ninja/countries?sort=country")

  return res.data
}
