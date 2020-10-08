/** Packages */

const mongoose= require("mongoose");

const Schema= mongoose.Schema;

/** Schema creation */
const courseSchema = new Schema({
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
module.exports = courseSchema;