/** Packages */

const mongoose= require("mongoose");

const Schema= mongoose.Schema;

/** Schema creation */
const studentGroupSchema = new Schema({
    student_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"coll_student",
        require: true  
    },
    group_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"coll_group",
        require: true  
    }
    
});

/** schema exportation */
module.exports = studentGroupSchema;