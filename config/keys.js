if(process.env.NODE_ENV === "production"){
    // production   
}else{
  module.exports = require("./dev")  
}