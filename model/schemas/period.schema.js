/** Packages */

const mongoose= require("mongoose");

const Schema= mongoose.Schema;

/** Schema creation */
const periodSchema = new Schema({
    year:{
        type:"Number",
        require: true,
        min:2020,
        max:2030
    },
    number:{
        type:"Number",
        require: true,
        min:1,
        max:2
    },
    current:{
        type:"Boolean",
        require: true,
        default: true
    }
    
});

/** schema exportation */
module.exports = periodSchema;