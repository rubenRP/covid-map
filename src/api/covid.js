const axios = require("axios")

const get = endpoint => axios.get(`https://corona.lmao.ninja${endpoint}`)

export async function getAllCountriesInfo() {
  try {
    let res = await get("/countries?sort=cases")
    return res.data
  } catch (error) {
    console.log(error)
  }
}
