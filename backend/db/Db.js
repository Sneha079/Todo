const { default: mongoose } = require("mongoose")
require("dotenv").config();

const dbConnect = () => {

    try {
        mongoose.connect(process.env.MOONGO_URI);
        console.log("Db connected");


    } catch (e) {
        console.log(e);

 
    }

}
module.exports = dbConnect;