/** Packages */

const mongoose= require("mongoose");

const Schema= mongoose.Schema;

/** Schema creation */
const curseSchema = new Schema({
    code:{
        type:"String",
        require: true
    },
    name:{
        type:"String",
        require: true
    }
    
});

/** schema exportation */
module.exports = curseSchema;