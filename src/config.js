require('dotenv').config()
var config={
        "port": process.env.PORT,
        "api_url": process.env.API_URL                
}
module.exports.config = config; 