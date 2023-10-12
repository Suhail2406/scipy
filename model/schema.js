const mongoose=require("mongoose");
const Schema=mongoose.Schema;
const StudentSchema=new Schema(
    {
        Name:{
            type:String,
            required:true,
        },
        Standard:{
            type:String,
            required:true
        },
    }
);

module.exports=mongoose.model("Student",StudentSchema);
