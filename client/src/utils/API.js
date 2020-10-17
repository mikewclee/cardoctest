var axios = require('axios');

export default {
    searchVin: function (query) {
        return axios.get(
            `https://vpic.nhtsa.dot.gov/api/vehicles/decodevinvaluesextended/${query}?format=json`)
    },
    loadSavedVin: function () {
        return axios.get('api/vin')
    },
    deleteVin: function (id) {
        return axios.delete("/api/vin/" + id);
    },
    saveVin: function (vinData) {
        return axios.post("/api/vin", vinData);
    }
}